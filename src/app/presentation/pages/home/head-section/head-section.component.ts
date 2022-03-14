import { Component } from '@angular/core';
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { HomeState } from "../../../../data/modules/home/home.state";
import { HomeStateExtras } from "../../../../data/modules/home/home.metadata";

@Component({
  selector: 'app-head-section',
  templateUrl: './head-section.component.html',
  styleUrls: ['./head-section.component.scss']
})
export class HeadSectionComponent {
  @Select(HomeState.selectExtras) extras$: Observable<HomeStateExtras>;

  constructor() {}
}
