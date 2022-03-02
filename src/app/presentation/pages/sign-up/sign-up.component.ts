import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {

  constructor(
    public readonly helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

}
