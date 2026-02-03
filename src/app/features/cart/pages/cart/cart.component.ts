import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { CartService } from '../../services/cart.service'
import { CartItem } from '@shared/models/cart'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: CartItem[] = []
  subtotal = 0
  shipping = 5.0
  total = 0

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.loadCartItems()
  }

  updateQuantity(productId: number, quantity: number): void {
    this.cartService.updateQuantity(productId, quantity)
    this.loadCartItems()
  }

  mergeCart(): void {
    this.cartService.mergeCart()
    this.loadCartItems()
  }

  removeItem(productId: number): void {
    this.cartService.removeProduct(productId)
    this.loadCartItems()
  }

  calculateTotals(): void {
    this.subtotal = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
    this.total = this.subtotal + this.shipping
  }

  private loadCartItems(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items
      this.calculateTotals()
    })
  }

  checkout(): void {
    this.router.navigate(['/checkout'])
  }
}
