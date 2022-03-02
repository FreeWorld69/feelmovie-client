import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {

  constructor(
    public readonly helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

}
