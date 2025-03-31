import { RouterModule, ROUTES, Routes } from '@angular/router'
import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { OrderDetailComponent } from './pages/order-detail/order-detail.component'
import { OrderComponent } from './pages/order/order.component'
import { ProductDetailComponent } from './pages/product-detail/product-detail.component'
import { RegisterComponent } from './pages/register/register.component'
import { NgModule } from '@angular/core'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'order', component: OrderComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
