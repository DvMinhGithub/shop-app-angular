import { Component, Input } from '@angular/core'
import { CartService } from '@features/cart/services/cart.service'
import { IProduct } from '@shared/models/product'
import { getProductImage } from '../../utils/product'

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: IProduct

  get image(): string {
    return getProductImage(this.product)
  }

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.product.id, 1)
  }

  buyNow(): void {
    this.addToCart()
  }
}
