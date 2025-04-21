import { Component, Input } from '@angular/core'
import { CartService } from 'src/app/core/services/cart.service'
import { IProduct } from 'src/app/shared/models/product'

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
function getProductImage(product: IProduct): string {
  throw new Error('Function not implemented.')
}
