import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './presentation/layouts/header/header.component';
import { FooterComponent } from './presentation/layouts/footer/footer.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { MovieCarouselComponent } from './presentation/pages/home/movie-carousel/movie-carousel.component';
import { SignInComponent } from './presentation/pages/sign-in/sign-in.component';
import { SignUpComponent } from './presentation/pages/sign-up/sign-up.component';
import { ErrorComponent } from './presentation/pages/error/error.component';
import { CatalogComponent } from './presentation/pages/catalog/catalog.component';
import { DetailsComponent } from './presentation/pages/details/details.component';
import { HelperService } from "./data/utils/helper.service";
import { AdvancedMovieCardComponent } from './presentation/components/advanced-movie-card.component';
import { BasicMovieCardComponent } from './presentation/components/basic-movie-card.component';
import { RouterModule } from "@angular/router";
import { routes } from "./routes";
import { MovieDataModule } from "./data/modules/movie-data/movie-data.module";
import { SuggestedMovieCarouselComponent } from './presentation/components/suggested-movie-carousel.component';
import { HeadSectionComponent } from './presentation/pages/home/head-section/head-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieCarouselComponent,
    SignInComponent,
    SignUpComponent,
    ErrorComponent,
    CatalogComponent,
    DetailsComponent,
    AdvancedMovieCardComponent,
    BasicMovieCardComponent,
    SuggestedMovieCarouselComponent,
    SuggestedMovieCarouselComponent,
    HeadSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MovieDataModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
