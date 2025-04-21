import { Injectable } from '@angular/core'
import { signal, computed } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<Map<number, number>>(new Map<number, number>())

  cartCount = computed(() => this.cart().size)

  constructor() {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      this.cart.set(new Map(JSON.parse(storedCart)))
    }
  }

  addToCart(productId: number, quantity: number): void {
    this.cart.update((currentCart) => {
      const currentQuantity = currentCart.get(productId) || 0
      currentCart.set(productId, currentQuantity + quantity)
      return new Map(currentCart)
    })
    this.saveCartToLocalStorage()
  }

  removeProduct(productId: number): void {
    this.cart.update((currentCart) => {
      currentCart.delete(productId)
      return new Map(currentCart)
    })
    this.saveCartToLocalStorage()
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(Array.from(this.cart().entries())))
  }

  getCart(): Map<number, number> {
    return this.cart()
  }
}
