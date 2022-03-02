import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent implements OnInit {

  constructor(
    public readonly helperService: HelperService
  ) { }

  ngOnInit(): void {
  }

}
