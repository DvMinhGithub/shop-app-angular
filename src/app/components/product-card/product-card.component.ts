import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { CartService } from 'src/app/services/cart.service'
import { IProduct } from 'src/app/types/product'
import { getProductImage } from 'src/app/utils/product'

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
