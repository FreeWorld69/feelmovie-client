const { app, BrowserWindow } = require('electron');

let win;

// icon: `file://${__dirname}/dist/cimon-client/assets/img/logo.png`
// win.loadURL(`file://${__dirname}/dist/cimon-client/index.html#`);
// const location = (loc) => `file://${__dirname}/src/${loc}`;

const location = (loc) => `file://${__dirname}/dist/cimon-client/${loc}`;

function createWindow () {
  win = new BrowserWindow({
    width: 1200,
    height: 1200,
    icon: location('assets/img/logo.png')
  });

  console.log(location('index.html#'))
  win.loadURL(location('index.html#'));

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
