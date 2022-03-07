import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelperService } from "./utils/helper.service";
import { MovieDataModule } from "./movie-data/movie-data.module";
import { FormsModule } from "@angular/forms";
import { ComponentModule } from "./presentation/component.module";
import { DirectiveModule } from "./presentation/directive.module";
import { LayoutModule } from "./presentation/layout.module";
import { RoutingModule } from "./presentation/routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { PipeModule } from "./presentation/pipe.module";
import { PagesModule } from "./presentation/pages.module";
import { NgxsModule } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { environment } from "../environments/environment";
import { StoreModule } from "./data/modules/store.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    MovieDataModule,
    FormsModule,
    ComponentModule,
    DirectiveModule,
    LayoutModule,
    PipeModule,
    PagesModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    StoreModule,
    HttpClientModule
  ],
  declarations: [AppComponent],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
