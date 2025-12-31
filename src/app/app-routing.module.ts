import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/user/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'introduce',
        loadChildren: () => import('./features/user/introduce/introduce.module').then((m) => m.IntroduceModule)
      },
      {
        path: 'color',
        loadChildren: () => import('./features/user/color/color.module').then((m) => m.ColorModule)
      },
      {
        path: 'product',
        loadChildren: () => import('./features/user/product/product.module').then((m) => m.ProductModule)
      },
      {
        path: 'house-designs',
        loadChildren: () => import('./features/user/house-designs/house-designs.module').then((m) => m.HouseDesignsModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('./features/user/customer/customer.module').then((m) => m.CustomerModule)
      },
      {
        path: 'news',
        loadChildren: () => import('./features/user/news/news.module').then((m) => m.NewsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/user/contact/contact.module').then((m) => m.ContactModule)
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 