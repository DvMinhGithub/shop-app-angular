import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../../shared/share.module'
import { OrderDetailComponent } from './components/order-detail/order-detail.component'
import { OrderComponent } from './components/order-list/order.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [OrderComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrderComponent
      },
      {
        path: ':id',
        component: OrderDetailComponent
      }
    ])
  ]
})
export class OrdersModule {}
