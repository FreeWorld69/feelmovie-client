import { Component } from '@angular/core';
import { ElectronService } from "../../../utils/electron.service";

const TopbarClickEvents = {
  MAXIMIZE: 'MAXIMIZE',
  MINIMIZE: 'MINIMIZE',
  CANCEL: 'CANCEL'
}

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  public TopbarClickEvents = TopbarClickEvents;

  constructor(
    private readonly electronService: ElectronService
  ) { }

  onClick(ipcName: string): void {
    this.electronService.ipcRenderer.send(ipcName);
  }
}
