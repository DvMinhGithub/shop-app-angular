import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { AdminGuardFn } from './core/guards/admin.guards'
import { AuthGuardFn } from './core/guards/auth.guards'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./features/products/products.module').then((m) => m.ProductsModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.module').then((m) => m.CartModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./features/orders/orders.module').then((m) => m.OrdersModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
      }
    ]
  },
  {
    path: 'admin',
    canActivate: [AdminGuardFn],
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {} 
