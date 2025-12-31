import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseDesignsRoutingModule } from './house-designs-routing.module';
import { HouseDesignsComponent } from './house-designs.component';


@NgModule({
  declarations: [
    HouseDesignsComponent
  ],
  imports: [
    CommonModule,
    HouseDesignsRoutingModule
  ]
})
export class HouseDesignsModule { }
