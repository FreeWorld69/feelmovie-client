import { Routes } from "@angular/router";
import { HomeComponent } from "./presentation/pages/home/home.component";
import { CatalogComponent } from "./presentation/pages/catalog/catalog.component";
import { DetailsComponent } from "./presentation/pages/details/details.component";
import { SignInComponent } from "./presentation/pages/sign-in/sign-in.component";
import { SignUpComponent } from "./presentation/pages/sign-up/sign-up.component";
import { ErrorComponent } from "./presentation/pages/error/error.component";
import { Configs } from "./configs/config";


export const routes: Routes = [
  // root
  { path: '', component: HomeComponent },

  // content
  { path: Configs.routeRootNames.catalog, component: CatalogComponent },
  { path: Configs.routeRootNames.details, component: DetailsComponent },
  { path: Configs.routeRootNames.signIn, component: SignInComponent },
  { path: Configs.routeRootNames.signUp, component: SignUpComponent },

  // fallback routes
  { path: Configs.routeRootNames.signUp, component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];
