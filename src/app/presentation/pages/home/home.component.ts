import { HomeController } from "../../../data/modules/home/home.controller";
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Select } from "@ngxs/store";
import { HomeState } from "../../../data/modules/home/home.state";
import { MovieSchema } from "../../../data/schemas/core/movie.schema";
import { TempHelper } from "../tempHelper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Select(HomeState.selectMovies) homeMovies$: Observable<MovieSchema[]>;
  @Select(HomeState.selectTopMovies) homeTopMovies$: Observable<MovieSchema[]>;

  constructor(
    private readonly homeController: HomeController,
    public tempHelper: TempHelper
  ) { }

  ngOnInit(): void {
    // this.homeController.initHomeData();
  }
}
