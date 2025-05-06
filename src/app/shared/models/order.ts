import { IProductOrder } from './product'
import { IPaginatedResponse } from './response'

export interface IOrderItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

export interface IOrder {
  orderId: string
  orderDate: Date
  items: IOrderItem[]
  shippingFee: number
  totalAmount: number
  customerName: string
  shippingAddress: string
  paymentMethod: string
}
       
export interface IOrderDetails {
  id: number
  product: IProductOrder
  price: number
  quantity: number
  totalMoney: number
}

export interface ICartItem {
  productId: number
  quantity: number
}

export interface IOrderResponse {
  id: number
  userId: string
  fullName: string
  email: string
  phoneNumber: string
  address: string
  note: string
  orderDate: Date
  totalMoney: number
  shippingMethod: string
  shippingAddress: string
  paymentMethod: string
  status: string
  orderDetails: IOrderDetails[]
}

export type TPaginatedOrderResponse = IPaginatedResponse<IOrderResponse>

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
