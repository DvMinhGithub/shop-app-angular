import { Injectable } from '@angular/core'
import { ProductService } from './product.service'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Map<number, number> = new Map<number, number>()

  constructor(private productService: ProductService) {
    const storeCart = localStorage.getItem('cart')
    if (storeCart) {
      this.cart = new Map(JSON.parse(storeCart))
    }
  }

  addToCart(productId: number, quantity: number): void {
    if (this.cart.has(productId)) {
      this.cart.set(productId, this.cart.get(productId)! + quantity)
    } else {
      this.cart.set(productId, quantity)
    }
    this.saveCartToLocalStorage(this.cart)
  }

  getCart(): Map<number, number> {
    return this.cart
  }

  saveCartToLocalStorage(cart: Map<number, number>): void {
    this.cart = cart
    localStorage.setItem('cart', JSON.stringify(Array.from(this.cart.entries())))
  }

  removeProduct(productId: number): void {
    this.cart.delete(productId)
    this.saveCartToLocalStorage(this.cart)
  }
}
