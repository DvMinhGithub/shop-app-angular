import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { IOrderResponse } from 'src/app/types/order';
import { IPagination } from 'src/app/types/request';

@Component({
  selector: 'app-order-detail-admin',
  templateUrl: './order-detail-admin.component.html',
  styleUrls: ['./order-detail-admin.component.scss']
})
export class OrderDetailAdminComponent {

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
  }
  // Thêm vào component
getStatusText(status: string): string {
  const statusMap: {[key: string]: string} = {
    'PENDING': 'Chờ xử lý',
    'PROCESSING': 'Đang xử lý',
    'COMPLETED': 'Hoàn thành',
    'CANCELLED': 'Đã hủy'
  };
  return statusMap[status] || status;
}

getPaymentMethodText(method: string): string {
  const methodMap: {[key: string]: string} = {
    'cod': 'Thanh toán khi nhận hàng',
    'banking': 'Chuyển khoản ngân hàng',
    'momo': 'Ví điện tử MoMo',
    'vnpay': 'VNPay'
  };
  return methodMap[method] || method;
}

updateOrderStatus(newStatus: string) {
  // Logic cập nhật trạng thái đơn hàng
}

cancelOrder() {
  // Logic hủy đơn hàng
}

printOrder() {
  // Logic in hóa đơn
}

viewProduct(productId: number) {
  // Logic xem chi tiết sản phẩm
}

removeItem(itemId: number) {
  // Logic xóa sản phẩm khỏi đơn hàng
}

}
