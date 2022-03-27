import { Injectable } from "@angular/core";
import { IpcRenderer } from 'electron'

@Injectable()
export class ElectronService {
  public ipcRenderer: IpcRenderer;

  constructor() {
    this.ipcRenderer = (<any>window).ipcRenderer
  }
}


/*============================================================[ Alternative ]

if ((<any>window).require) {
  try {
    this.ipc = (<any>window).require('electron').ipcRenderer
  } catch (error) {
    throw error
  }
} else {
  console.warn('Could not load electron ipc')
}

 ============================================================*/
