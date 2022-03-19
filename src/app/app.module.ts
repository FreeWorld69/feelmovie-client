import { environment } from "../environments/environment";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HelperService } from "./utils/helper.service";
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
import { StoreModule } from "./data/modules/store.module";
import { HttpClientModule } from "@angular/common/http";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
// import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";


@NgModule({
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ComponentModule,
    DirectiveModule,
    LayoutModule,
    PipeModule,
    PagesModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    // NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    StoreModule,
    HttpClientModule,
  ],
  declarations: [AppComponent],
  providers: [
    HelperService,

    // for Electron !!!!
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
