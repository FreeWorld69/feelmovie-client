import { Component } from '@angular/core';
import { Dropdown } from "../../components/@custom/dropdown/dropdown.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  constructor() { }

  log(event: Dropdown.EmitItemProps) {
    console.log(event)
  }
}
