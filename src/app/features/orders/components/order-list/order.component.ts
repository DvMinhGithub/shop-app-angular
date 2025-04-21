import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { CartService } from 'src/app/core/services/cart.service'
import { OrderService } from 'src/app/core/services/order.service'
import { ProductService } from 'src/app/core/services/product.service'
import { TokenService } from 'src/app/core/services/token.service'
import { IOrderItem, IOrderCreateRequest } from 'src/app/shared/models/order'
import { IProduct } from 'src/app/shared/models/product'
import { IApiResponse } from 'src/app/shared/models/response'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup
  couponCode = ''
  orderItems!: IOrderItem[]
  userId!: number | null
  isLoading = true

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private orderService: OrderService,
    private tokenService: TokenService
  ) {
    this.orderForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      address: ['', Validators.required],
      note: [''],
      paymentMethod: ['cod', Validators.required],
      shippingMethod: ['standard', Validators.required]
    })
  }

  ngOnInit(): void {
    const cart = this.cartService.getCart()
    const productIds = Array.from(cart.keys())
    this.userId = this.tokenService.getUserId()
    this.productService.getProductByIds(productIds).subscribe({
      next: (res: IApiResponse<IProduct[]>) => {
        this.orderItems = res.result.map((product) => ({
          id: product.id,
          name: product.name,
          image: product.thumbnail[0],
          price: product.price,
          quantity: cart.get(product.id) || 0
        }))
        console.log('Order items:', this.orderItems)
        this.isLoading = false
      },
      error: (error) => {
        console.error('Error:', error)
        this.isLoading = false
      }
    })
  }

  get totalPrice(): number {
    if (!this.orderItems) {
      return 0
    }
    return this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  applyCoupon(): void {
    if (this.couponCode) {
      console.log('Applying coupon:', this.couponCode)
    }
  }

  submitOrder(): void {
    if (this.orderForm.valid) {
      const orderData: IOrderCreateRequest = {
        userId: this.userId,
        ...this.orderForm.value,
        cartItems: this.orderItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity
        }))
      }
      this.orderService.createOrder(orderData).subscribe({
        next: (res) => {
          console.log('Order created:', res)
          this.router.navigate(["/"])
        },
        error: (error) => {
          console.error('Error:', error)
        }
      })
    } else {
      this.orderForm.markAllAsTouched()
    }
  }

  updateQuantity(item: IOrderItem, newQuantity: number): void {
    if (newQuantity > 0) {
      item.quantity = newQuantity
    }
  }

  removeItem(itemId: number): void {
    this.orderItems = this.orderItems.filter((item) => item.id !== itemId)
    this.cartService.removeProduct(itemId)
  }
}
