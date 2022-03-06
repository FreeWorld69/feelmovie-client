import { Component } from '@angular/core';
import { HelperService } from "../../../utils/helper.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(public readonly helperService: HelperService) { }
}
