import { NgModule } from '@angular/core';
import { CatalogModule } from "./pages/catalog/catalog.module";
import { DetailsModule } from "./pages/details/details.module";
import { ErrorModule } from "./pages/error/error.module";
import { SignInModule } from "./pages/sign-in/sign-in.module";
import { SignUpModule } from "./pages/sign-up/sign-up.module";
import { TestModule } from "./pages/test/test.module";
import { HomeModule } from "./pages/home/home.module";

@NgModule({
  imports: [
    HomeModule,
    CatalogModule,
    DetailsModule,
    ErrorModule,
    SignInModule,
    SignUpModule,
    TestModule
  ]
})
export class PagesModule { }
