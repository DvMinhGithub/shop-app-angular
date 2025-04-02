import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { AppRoutingModule } from './app.routes'
import { AppComponent } from './app/app.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { ProductCardSkeletonComponent } from './components/product-card-skeleton/product-card-skeleton.component'
import { ProductCardComponent } from './components/product-card/product-card.component'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { OrderComponent } from './pages/order/order.component'
import { OrderDetailComponent } from './pages/order-detail/order-detail.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { RegisterComponent } from './pages/register/register.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminComponent } from './components/admin/admin/admin.component'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
    OrderComponent,
    OrderDetailComponent,
    RegisterComponent,
    LoginComponent,
    ProductCardComponent,
    PaginationComponent,
    ProductCardSkeletonComponent,
    AppComponent,
    MainLayoutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot([]),
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
