import { Component, OnInit } from '@angular/core';
import { AdvancedMovieCardProps } from "../../components/advanced-movie-card.component";
import { BasicMovieCardProps } from "../../components/basic-movie-card.component";
import { MovieDataService } from "../../../data/movie-data/services/movie-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public readonly movieDataService: MovieDataService
  ) { }

  ngOnInit(): void {
  }

}
