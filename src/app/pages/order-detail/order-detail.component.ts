import { Component, OnInit } from '@angular/core'
import { OrderService } from 'src/app/services/order.service'
import { IOrderResponse } from 'src/app/types/order'
import { IApiResponse } from 'src/app/types/response'

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order!: IOrderResponse
  isLoading = true

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrderDetails()
  }

  loadOrderDetails(): void {
    const orderId = 1
    this.orderService.getOrder(orderId).subscribe({
      next: (res: IApiResponse<IOrderResponse>) => {
        this.order = res.result
        this.isLoading = false
      },
      error: (error) => {
        console.error('Error:', error)
        this.isLoading = false
      }
    })
  }

  get subtotal(): number {
    return this.order.orderDetails.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  continueShopping(): void {
    console.log('Tiếp tục mua sắm')
  }
}
