import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/share.module'
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component'
import { HomeComponent } from './pages/home.component'
import { RouterModule } from '@angular/router';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component'

@NgModule({
  declarations: [HomeComponent, HeroBannerComponent, FeaturedProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
