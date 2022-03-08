import { Component } from '@angular/core';
import { MovieDataService } from "../../../movie-data/services/movie-data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  constructor(
    public readonly movieDataService: MovieDataService
  ) { }
}
