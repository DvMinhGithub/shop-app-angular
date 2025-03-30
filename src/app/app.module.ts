import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HomeComponent } from './pages/home/home.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { RouterModule } from '@angular/router'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { OrderComponent } from './pages/order/order.component'
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component'
import { RegisterComponent } from './pages/register/register.component'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { LoginComponent } from './pages/login/login.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ProductCardSkeletonComponent } from './components/product-card-skeleton/product-card-skeleton.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    OrderComponent,
    OrderConfirmComponent,
    RegisterComponent,
    LoginComponent,
    ProductCardComponent,
    PaginationComponent,
    ProductCardSkeletonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([]),
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ProductDetailComponent]
})
export class AppModule {}
