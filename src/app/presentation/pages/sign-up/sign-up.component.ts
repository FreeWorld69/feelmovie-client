import { Component } from '@angular/core';
import { HelperService } from "../../../utils/helper.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  constructor(public readonly helperService: HelperService) { }
}
