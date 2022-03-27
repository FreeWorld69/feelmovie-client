const { contextBridge, ipcRenderer } = require("electron");

console.log('ipc renderer initialized');
contextBridge.exposeInMainWorld("ipcRenderer", ipcRenderer); //exposing ipcRenderer to the window in renderer process
