import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './components/product-list/home.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { SharedModule } from '../../shared/share.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CarouselModule } from 'ngx-owl-carousel-o'

@NgModule({
  declarations: [HomeComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ])
  ]
})
export class ProductsModule {}
