import { Component } from '@angular/core'
import { OrderService } from '@features/orders/services/order.service'
import { IOrderResponse } from '@shared/models/order'
import { IPagination } from '@shared/models/request'

@Component({
  selector: 'app-admin-order-detail',
  templateUrl: './admin-order-detail.component.html',
  styleUrls: ['./admin-order-detail.component.scss']
})
export class AdminOrderDetailComponent {
  isLoading = true
  orders: IOrderResponse[] = []
  keyword = ''
  pagination: IPagination = {
    page: 1,
    limit: 12
  }

  constructor(private orderService: OrderService) {
    this.loadOrders()
  }

  loadOrders(): void {
    this.orderService.getOrdersByKey(this.keyword, this.pagination).subscribe({
      next: (res) => {
        this.orders = res.result.content
        console.log(this.orders)

        this.isLoading = false
      },
      error: (error) => {
        console.error('There was an error!', error)
        this.isLoading = false
      }
    })
  }

  getStatusText(status: string): string {
    const statusMap: { [key: string]: string } = {
      PENDING: 'Chờ xử lý',
      PROCESSING: 'Đang xử lý',
      COMPLETED: 'Hoàn thành',
      CANCELLED: 'Đã hủy'
    }
    return statusMap[status] || status
  }

  getPaymentMethodText(method: string): string {
    const methodMap: { [key: string]: string } = {
      cod: 'Thanh toán khi nhận hàng',
      banking: 'Chuyển khoản ngân hàng',
      momo: 'Ví điện tử MoMo',
      vnpay: 'VNPay'
    }
    return methodMap[method] || method
  }

  updateOrderStatus(newStatus: string) {}

  cancelOrder() {}

  printOrder() {}

  viewProduct(productId: number) {}

  removeItem(itemId: number) {}
}
