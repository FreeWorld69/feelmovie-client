import { Component } from '@angular/core';
import { ElectronService } from "../../../utils/electron.service";
import { SvgIconEnum } from "../../components/@custom/svg/svg-icon.enum";

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
  public SvgIconEnum = SvgIconEnum;

  constructor(
    private readonly electronService: ElectronService
  ) { }

  onClick(ipcName: string): void {
    this.electronService.ipcRenderer.send(ipcName);
  }
}
