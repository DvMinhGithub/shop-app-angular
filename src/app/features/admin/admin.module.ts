import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/share.module'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AdminOrderDetailComponent } from './components/orders/admin-order-detail/admin-order-detail.component'
import { AdminOrderListComponent } from './components/orders/admin-order-list/admin-order-list.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [DashboardComponent, AdminOrderListComponent, AdminOrderDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'orders',
        component: AdminOrderListComponent
      },
      {
        path: 'orders/:id',
        component: AdminOrderDetailComponent
      }
    ])
  ]
})
export class AdminModule {}
