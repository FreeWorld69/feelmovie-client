import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgComponent } from "./components/@custom/svg/svg.component";
import { AdvancedMovieCardComponent } from "./components/advanced-movie-card.component";
import { BasicMovieCardComponent } from "./components/basic-movie-card.component";
import { BasicMovieCarouselCardComponent } from "./components/basic-movie-carousel-card.component";
import { FormsModule } from "@angular/forms";
import { DropdownComponent } from "./components/@custom/dropdown/dropdown.component";
import { LoaderComponent } from "./components/@custom/loader/loader.component";
import { TabsComponent } from "./components/@custom/tabs/tabs.component";
import { TabComponent } from "./components/@custom/tabs/tab.component";
import { DirectiveModule } from "./directive.module";
import { AccordionComponent } from './components/@custom/accordion/accordion.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SearchMovieCardComponent } from "./components/search-movie-card.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [CommonModule, FormsModule, DirectiveModule, BrowserAnimationsModule, RouterModule,],
  declarations: [
    DropdownComponent,
    LoaderComponent,
    TabsComponent,
    TabComponent,
    SvgComponent,
    AdvancedMovieCardComponent,
    SearchMovieCardComponent,
    BasicMovieCardComponent,
    BasicMovieCarouselCardComponent,
    AccordionComponent
  ],
  exports: [
    DropdownComponent,
    LoaderComponent,
    TabsComponent,
    TabComponent,
    AccordionComponent,
    SvgComponent,
    AdvancedMovieCardComponent,
    BasicMovieCardComponent,
    BasicMovieCarouselCardComponent,
    SearchMovieCardComponent
  ]
})
export class ComponentModule { }
