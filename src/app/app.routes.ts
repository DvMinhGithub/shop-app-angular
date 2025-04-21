import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminGuardFn } from './core/guards/admin.guards'
import { AuthGuardFn } from './core/guards/auth.guards'
import { DashboardComponent } from './features/admin/components/dashboard/dashboard.component'
import { AdminOrderListComponent } from './features/admin/components/orders/admin-order-list/admin-order-list.component'
import { LoginComponent } from './features/auth/components/login/login.component'
import { RegisterComponent } from './features/auth/components/register/register.component'
import { OrderDetailComponent } from './features/orders/components/order-detail/order-detail.component'
import { OrderComponent } from './features/orders/components/order-list/order.component'
import { ProductDetailComponent } from './features/products/components/product-detail/product-detail.component'
import { HomeComponent } from './features/products/components/product-list/home.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: 'order', component: OrderComponent, canActivate: [AuthGuardFn] },
      { path: 'order-detail/:id', component: OrderDetailComponent, canActivate: [AuthGuardFn] }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuardFn],
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' },
      { path: 'orders', component: AdminOrderListComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
