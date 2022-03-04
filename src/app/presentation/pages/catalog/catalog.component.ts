import { Component } from '@angular/core';
import { MovieDataService } from "../../../data/modules/movie-data/services/movie-data.service";
import { Dropdown } from "../../@custom/dropdown/dropdown.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  constructor(
    public readonly movieDataService: MovieDataService
  ) { }

  log(event: Dropdown.EmitItemProps) {
    console.log(event)
  }
}
