export interface IOrderItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export interface IOrderDetails {
  orderId: string
  orderDate: Date
  items: IOrderItem[]
  shippingFee: number
  totalAmount: number
  customerName: string
  shippingAddress: string
  paymentMethod: string
}
