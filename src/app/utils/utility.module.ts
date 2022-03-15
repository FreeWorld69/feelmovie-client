import { NgModule } from '@angular/core';
import { HelperService } from "./helper.service";
import { SharedService } from "./shared-servcie.service";

@NgModule({
  imports: [
  ],
  providers: [
    SharedService,
    HelperService
  ],
  declarations: [

  ],
})
export class UtilityModule { }
