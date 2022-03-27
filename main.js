const electronReload = require('electron-reload');
const { app, BrowserWindow } = require('electron');

let win;
const location = (loc) => `file://${__dirname}/dist/cimon-client/${loc}`;
electronReload(__dirname, {});

function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 1200,
    icon: location('assets/img/logo.png'),
    webPreferences: {
      devTools: true
    }
  });


  //! Production
  // win.loadURL(location('index.html#'));

  //! DEV
  win.loadURL('http://localhost:4200/index.html');


  win.on('closed', function () {
    win = null;
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
