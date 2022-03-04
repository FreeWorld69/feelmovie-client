import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TestComponent } from "./test.component";
import { ComponentModule } from "../../component.module";

@NgModule({
  imports: [
    CommonModule,
    ComponentModule
  ],
  declarations: [
    TestComponent
  ],
  exports: [
    TestComponent
  ]
})
export class TestModule { }
