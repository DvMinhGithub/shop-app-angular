import { Component } from '@angular/core'
import { IOrderDetails } from 'src/app/types/order'

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent {
  order: IOrderDetails = {
    orderId: 'DH-' + Math.floor(Math.random() * 1000000),
    orderDate: new Date(),
    items: [
      {
        id: 1,
        name: 'iPhone 14 Pro Max',
        image: '../../assets/images/product.png',
        price: 29990000,
        quantity: 1
      },
      {
        id: 2,
        name: 'AirPods Pro 2',
        image: '../../assets/images/product.png',
        price: 5990000,
        quantity: 2
      }
    ],
    shippingFee: 30000,
    totalAmount: 29990000 + 5990000 * 2 + 30000,
    customerName: 'Nguyễn Văn A',
    shippingAddress: '123 Đường ABC, Quận 1, TP.HCM',
    paymentMethod: 'Thanh toán khi nhận hàng (COD)'
  }

  get subtotal(): number {
    return this.order.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  continueShopping(): void {
    console.log('Tiếp tục mua sắm')
  }
}
