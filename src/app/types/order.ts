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

export interface ICartItem {
  productId: number
  quantity: number
}

export interface IOrderCreateRequest {
  userId: string
  fullName: string
  email: string
  phoneNumber: string
  address: string
  note: string
  totalMoney: number
  shippingMethod: string
  shippingAddress: string
  paymentMethod: string
  cartItems: ICartItem[]
}