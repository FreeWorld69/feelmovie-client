import { Component, OnInit } from '@angular/core';
import { HelperService } from "../../../data/utils/helper.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public readonly helperService: HelperService
  ) {}

  ngOnInit(): void {}
}
