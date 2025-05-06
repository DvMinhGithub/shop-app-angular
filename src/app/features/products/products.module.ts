import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { SharedModule } from '../../shared/share.module'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    SharedModule,
    RouterModule.forChild([
      // {
      //   path: '',
      //   component: HomeComponentt
      // },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ])
  ]
})
export class ProductsModule {}
