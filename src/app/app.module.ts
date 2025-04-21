import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'
import { CarouselModule } from 'ngx-owl-carousel-o'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routes'

import { DashboardComponent } from './features/admin/components/dashboard/dashboard.component'
import { LoginComponent } from './features/auth/components/login/login.component'
import { RegisterComponent } from './features/auth/components/register/register.component'
import { OrderComponent } from './features/orders/components/order-list/order.component'
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component'
import { HomeComponent } from './features/products/components/product-list/home.component'
import { FooterComponent } from './layouts/footer/footer.component'
import { HeaderComponent } from './layouts/header/header.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { PaginationComponent } from './shared/components/pagination/pagination.component'
import { ProductCardSkeletonComponent } from './shared/components/product-card-skeleton/product-card-skeleton.component'
import { ProductCardComponent } from './shared/components/product-card/product-card.component'
import { AdminOrderDetailComponent } from './features/admin/components/orders/admin-order-detail/admin-order-detail.component'
import { OrderDetailComponent } from './features/orders/components/order-detail/order-detail.component'
import { AdminOrderListComponent } from './features/admin/components/orders/admin-order-list/admin-order-list.component'

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
    DashboardComponent,
    OrderDetailComponent,
    AdminOrderDetailComponent,
    AdminOrderDetailComponent,
    AdminOrderListComponent
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
