import { Component, OnInit } from '@angular/core';
import { MovieDataService } from "../../../data/modules/movie-data/services/movie-data.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(
    public readonly movieDataService: MovieDataService
  ) { }

  ngOnInit(): void {
  }

}
