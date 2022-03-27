// noinspection JSIgnoredPromiseFromCall

const electronReload = require('electron-reload');
const electron = require("electron");

let {app, BrowserWindow, ipcMain} = electron;
let win, development;

development = process.argv.some(el => el === '--development');

console.log({
  isDev: development
})

if (development) {
  electronReload(__dirname, {});
}

let TopbarClickEvents = {
  MAXIMIZE: 'MAXIMIZE',
  MINIMIZE: 'MINIMIZE',
  CANCEL: 'CANCEL'
}


function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 1200,
    minHeight: 600,
    minWidth: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      contextIsolation: true,
      preload: `${__dirname}/preload.js`
    },
    frame: false
  });

  if (development) {
    win.loadURL('http://localhost:4200');
    win.openDevTools();
  }
  else {
    win.loadURL(`file://${__dirname}/dist/cimon-client/index.html`);
  }

  win.on('closed', function () {
    win = null;
  })

  // set ipc listeners
  ipcMain.on(TopbarClickEvents.CANCEL, () => {
    win.close();

    // for only macOS
    if (process.platform !== 'darwin') {
      app.quit();
    }
  })

  ipcMain.on(TopbarClickEvents.MINIMIZE, () => {
    if (win.isMinimizable()) {
      win.minimize();
    }
  })

  ipcMain.on(TopbarClickEvents.MAXIMIZE, () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      if (win.isMaximizable()) {
        win.maximize();
      }
    }
  })

}


app.on('ready', createWindow);
app.on('window-all-closed', function () {
  // for only macOS
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function () {
  // macOs specific close process
  if (win === null) {
    createWindow();
  }
})
