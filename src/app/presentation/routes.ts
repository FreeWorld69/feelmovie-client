import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { DetailsComponent } from "./pages/details/details.component";
import { SignInComponent } from "./pages/sign-in/sign-in.component";
import { SignUpComponent } from "./pages/sign-up/sign-up.component";
import { ErrorComponent } from "./pages/error/error.component";
import { Configs } from "../shared/config";
import { TestComponent } from "./pages/test/test.component";


export const routes: Routes = [
  { path: Configs.routeRootNames.home, component: HomeComponent },
  { path: Configs.routeRootNames.catalog, component: CatalogComponent },
  { path: Configs.routeRootNames.details.name, component: DetailsComponent },
  { path: Configs.routeRootNames.signIn, component: SignInComponent },
  { path: Configs.routeRootNames.signUp, component: SignUpComponent },

  { path: 'test', component: TestComponent },
  // fallback routes
  { path: Configs.routeRootNames.error, component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];
