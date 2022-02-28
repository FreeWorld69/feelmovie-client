import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './presentation/components/header/header.component';
import { FooterComponent } from './presentation/components/footer/footer.component';
import { HomeComponent } from './presentation/pages/home/home.component';
import { MovieCarouselComponent } from './presentation/pages/home/movie-carousel/movie-carousel.component';
import { SignInComponent } from './presentation/pages/sign-in/sign-in.component';
import { SignUpComponent } from './presentation/pages/sign-up/sign-up.component';
import { ErrorComponent } from './presentation/pages/error/error.component';
import { CatalogComponent } from './presentation/pages/catalog/catalog.component';
import { DetailsComponent } from './presentation/pages/details/details.component';
import { Helper } from "./utils/helper";

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Helper],
  bootstrap: [AppComponent]
})
export class AppModule { }
