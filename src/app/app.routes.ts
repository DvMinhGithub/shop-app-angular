import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { AdminGuardFn } from './components/guards/admin.guards';
import { AuthGuardFn } from './components/guards/auth.guards';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { OrderAdminComponent } from './components/admin/order-admin/order-admin.component';

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
    component: AdminComponent,
    canActivate: [AdminGuardFn], // Thêm guard nếu cần
    children: [
      { path: '', redirectTo: 'orders', pathMatch: 'full' }, // Redirect mặc định
      { path: 'orders', component: OrderAdminComponent }
      // { path: 'categories', component: CategoriesAdminComponent }, // Thêm component mới
      // { path: 'products', component: ProductsAdminComponent } // Thêm component mới
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}