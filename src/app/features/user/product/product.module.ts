import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSliderModule } from 'ng-zorro-antd/slider'
import { FormsModule } from '@angular/forms'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzPaginationModule } from 'ng-zorro-antd/pagination'


import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzSliderModule,
    FormsModule,
    NzCheckboxModule,
    NzRadioModule,
    NzPaginationModule
  ]
})
export class ProductModule { }
