import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/share.module'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { LazyLoadDirective } from 'src/app/shared/directives/lazyLoadDirective';

@NgModule({
  declarations: [HomeComponent, LazyLoadDirective],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NzCarouselModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
