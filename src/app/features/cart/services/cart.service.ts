import { Injectable, computed, signal } from '@angular/core'
import { cartApi } from '@app/constants/api'
import { ProductService } from '@features/products/services/product.service'
import { CartItem, CartItemMergeRequest } from '@shared/models/cart'
import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = signal<Map<number, number>>(new Map<number, number>())

  cartCount = computed(() => this.cart().size)

  constructor(
    private productService: ProductService,
    private http: HttpClient
  ) {
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

  loadCartItems(): Map<number, number> {
    const storedCart = localStorage.getItem('cart')
    if (storedCart) {
      this.cart.set(new Map(JSON.parse(storedCart)))
    }
    return this.cart()
  }

  getCartItems(): Observable<CartItem[]> {
    const ids = Array.from(this.cart().keys())
    if (ids.length === 0) {
      return of([])
    }

    return this.productService.getProductByIds(ids).pipe(
      map((response) => {
        return response.result.map((product) => ({
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.thumbnail[0] || ''
          },
          quantity: this.cart().get(product.id) || 0
        }))
      })
    )
  }

  mergeCart(): void {
    const cartItems = this.loadCartItems()
    const cartItemMergeRequest: CartItemMergeRequest[] = []
    cartItems.forEach((quantity, productId) => {
      cartItemMergeRequest.push({ productId, quantity })
    })
    if (cartItemMergeRequest.length === 0) {
      return
    }

    this.http.post(cartApi.mergeCart, cartItemMergeRequest).subscribe({
      next: () => {
        this.cart.set(new Map())
        this.saveCartToLocalStorage()
      }
    })
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cart.update((currentCart) => {
      if (quantity <= 0) {
        currentCart.delete(productId)
      } else {
        currentCart.set(productId, quantity)
      }
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
