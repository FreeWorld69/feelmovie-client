const { contextBridge, ipcRenderer } = require('electron')
var electron = require('electron');


contextBridge.exposeInMainWorld('electronAPI', {
  onUpdateCounter: (callback) => ipcRenderer.on('update-counter', callback),
  electronGetMovies: () => electron.ipcRenderer.sendSync('get-movies'),
  electronGetTopMovies: () => electron.ipcRenderer.sendSync('get-top-movies'),
  electronGetPopularMovies: () => electron.ipcRenderer.sendSync('get-popular-movies'),
  electronGetGeneralDetails: (movieDetailsId) => electron.ipcRenderer.sendSync('get-general-details', { movieDetailsId }),
  electronGetFoundMovie: (text) => electron.ipcRenderer.sendSync('get-found-movie', { text }),
  electronGetMovie: (id) => electron.ipcRenderer.sendSync('get-movie', { id }),
  electronGetSeries: (id, season) => electron.ipcRenderer.sendSync('get-series', { id, season }),
})
