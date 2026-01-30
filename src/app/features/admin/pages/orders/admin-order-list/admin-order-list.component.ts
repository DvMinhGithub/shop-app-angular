import { Component } from '@angular/core'
import { OrderService } from '@features/orders/services/order.service'
import { IOrderResponse } from '@shared/models/order'
import { IPagination } from '@shared/models/request'

@Component({
  selector: 'app-admin-order-list',
  templateUrl: './admin-order-list.component.html',
  styleUrls: ['./admin-order-list.component.scss']
})
export class AdminOrderListComponent {
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

  viewOrderDetail(orderId: number) {
    console.log('Xem đơn hàng:', orderId)
  }

  editOrder(orderId: number) {
    console.log('Sửa đơn hàng:', orderId)
  }

  deleteOrder(orderId: number) {
    console.log('Xóa đơn hàng:', orderId)
  }

  refreshOrders() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
}
