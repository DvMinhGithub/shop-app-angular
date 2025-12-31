import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/share.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AdminOrderDetailComponent } from './components/orders/admin-order-detail/admin-order-detail.component'
import { AdminOrderListComponent } from './components/orders/admin-order-list/admin-order-list.component'
import { FormsModule } from '@angular/forms'
import { AuthGuardFn } from 'src/app/core/guards/auth.guards'

@NgModule({
  declarations: [DashboardComponent, AdminOrderListComponent, AdminOrderDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuardFn]
      },
      {
        path: 'orders',
        component: AdminOrderListComponent,
        canActivate: [AuthGuardFn]
      },
      {
        path: 'orders/:id',
        component: AdminOrderDetailComponent,
        canActivate: [AuthGuardFn]
      }
    ])
  ]
})
export class AdminModule {}
