import { Component } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
    public readonly helperService: HelperService
  ) { }
}
