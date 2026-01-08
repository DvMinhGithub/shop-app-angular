import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzSliderModule } from 'ng-zorro-antd/slider'
import { FormsModule } from '@angular/forms'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzPaginationModule } from 'ng-zorro-antd/pagination'
import { NzRateModule } from 'ng-zorro-antd/rate'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzProgressModule } from 'ng-zorro-antd/progress'

import { ProductRoutingModule } from './product-routing.module'
import { ProductComponent } from './product.component'
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { SharedModule } from 'src/app/shared/share.module'

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzSliderModule,
    FormsModule,
    NzCheckboxModule,
    NzRadioModule,
    NzPaginationModule,
    NzRateModule,
    NzSkeletonModule,
    NzTagModule,
    NzProgressModule,
    SharedModule
  ]
})
export class ProductModule {}
