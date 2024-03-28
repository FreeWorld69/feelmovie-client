const electronReload = require('electron-reload');
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path')
const {
  getMovies,
  getFoundMovie,
  getGeneralDetails,
  getMovie,
  getPopularMovies,
  getSeries,
  getTopMovies
} = require('./functions');


process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

let win;
const location = (loc) => `file://${__dirname}/dist/movo/${loc}`;

electronReload(__dirname, {});


function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 1200,
    icon: location('assets/img/logo.png'),
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  //! Production
  win.loadURL(location('index.html#'));

  //! DEV
  // win.loadURL('http://localhost:4200/index.html');


  win.on('closed', function () {
    win = null;
  })

  // 'get-movies'
  // 'get-found-movie'
  // 'get-general-details'
  // 'get-movie'
  // 'get-popular-movies'
  // 'get-series'
  // 'get-top-movies'

  ipcMain.on('get-movies', async (event) => {
    const data = await getMovies();
    event.returnValue = data;
  })
  ipcMain.on('get-found-movie', async (event, { text }) => {
    const data = await getFoundMovie(text);
    event.returnValue = data;
  })
  ipcMain.on('get-general-details', async (event, { movieDetailsId }) => {
    const data = await getGeneralDetails(movieDetailsId);
    event.returnValue = data;
  })
  ipcMain.on('get-movie', async (event, { id }) => {
    const data = await getMovie(id);
    event.returnValue = data;
  })
  ipcMain.on('get-popular-movies', async (event) => {
    const data = await getPopularMovies();
    event.returnValue = data;
  })
  ipcMain.on('get-series', async (event, { id, season }) => {
    const data = await getSeries(id, season);
    event.returnValue = data;
  })
  ipcMain.on('get-top-movies', async (event) => {
    const data = await getTopMovies();
    event.returnValue = data;
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
