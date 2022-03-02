import { Routes } from "@angular/router";
import { HomeComponent } from "./presentation/pages/home/home.component";
import { CatalogComponent } from "./presentation/pages/catalog/catalog.component";
import { DetailsComponent } from "./presentation/pages/details/details.component";
import { SignInComponent } from "./presentation/pages/sign-in/sign-in.component";
import { SignUpComponent } from "./presentation/pages/sign-up/sign-up.component";
import { ErrorComponent } from "./presentation/pages/error/error.component";
import { Configs } from "./data/configs/config";
import { TestComponent } from "./presentation/pages/test.component";


export const routes: Routes = [
  { path: Configs.routeRootNames.home, component: HomeComponent },
  { path: Configs.routeRootNames.catalog, component: CatalogComponent },
  { path: Configs.routeRootNames.details, component: DetailsComponent },
  { path: Configs.routeRootNames.signIn, component: SignInComponent },
  { path: Configs.routeRootNames.signUp, component: SignUpComponent },

  { path: 'test', component: TestComponent },
  // fallback routes
  { path: Configs.routeRootNames.error, component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];
