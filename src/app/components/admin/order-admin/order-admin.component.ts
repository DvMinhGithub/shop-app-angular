import { Component } from '@angular/core'
import { OrderService } from 'src/app/services/order.service'
import { IOrder, IOrderResponse } from 'src/app/types/order'
import { IPagination } from 'src/app/types/request'

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.scss']
})
export class OrderAdminComponent {
  isLoading = true
  orders: IOrderResponse[] = []
  keyword: string = ''
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
        console.log(this.orders);
        

        // this.orders = res.result;
        this.isLoading = false
      },
      error: (error) => {
        console.error('There was an error!', error)
        this.isLoading = false
      }
    })
  } getStatusText(status: string): string {
    const statusMap: {[key: string]: string} = {
      'PENDING': 'Chờ xử lý',
      'PROCESSING': 'Đang xử lý',
      'COMPLETED': 'Hoàn thành',
      'CANCELLED': 'Đã hủy'
    };
    return statusMap[status] || status;
  }

  viewOrderDetail(orderId: number) {
    // Logic xem chi tiết đơn hàng
    console.log('Xem đơn hàng:', orderId);
  }

  editOrder(orderId: number) {
    // Logic chỉnh sửa đơn hàng
    console.log('Sửa đơn hàng:', orderId);
  }

  deleteOrder(orderId: number) {
    // Logic xóa đơn hàng
    console.log('Xóa đơn hàng:', orderId);
  }

  refreshOrders() {
    // Logic tải lại danh sách
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
