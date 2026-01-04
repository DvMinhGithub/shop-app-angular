import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared/share.module'
import { HomeComponent } from './home.component'
import { HomeRoutingModule } from './home-routing.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    NzCarouselModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
