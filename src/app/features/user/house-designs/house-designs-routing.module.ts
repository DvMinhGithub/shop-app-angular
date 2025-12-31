import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseDesignsComponent } from './house-designs.component';

const routes: Routes = [
  {path: '', component: HouseDesignsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseDesignsRoutingModule { }
