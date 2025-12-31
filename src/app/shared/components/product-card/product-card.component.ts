import { Component, Input } from '@angular/core'
import { IProduct } from 'src/app/shared/models/interface/product'
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

  constructor() {}

  addToCart(): void {
  }

  buyNow(): void {
    this.addToCart()
  }
}
