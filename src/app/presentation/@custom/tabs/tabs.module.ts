import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from "./tab.component";
import { TabsComponent } from "./tabs.component";



@NgModule({
  declarations: [TabComponent, TabsComponent], exports: [TabsComponent, TabComponent], imports: [CommonModule]
})
export class TabsModule { }
