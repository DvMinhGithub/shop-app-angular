import { Component, ViewChild } from '@angular/core'
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o'
import { IProduct } from 'src/app/types/product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @ViewChild('mainCarousel') mainCarousel!: CarouselComponent
  @ViewChild('thumbnailCarousel') thumbnailCarousel!: CarouselComponent

  product: IProduct = {
    name: 'iPhone 14 Pro Max',
    description: 'Điện thoại thông minh cao cấp của Apple với màn hình Dynamic Island và camera 48MP',
    price: 29990000,
    thumbnail: [
      '../../assets/images/product.png',
      '../../assets/images/product.png',
      '../../assets/images/product.png',
      '../../assets/images/product.png',
      '../../assets/images/product.png'
    ],
    categoryId: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  quantity = 1
  activeSlideIndex = 0

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: { items: 1 }
    },
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true
  }

  thumbnailOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 4 },
      600: { items: 5 },
      1000: { items: 5 }
    },
    margin: 8
  }

  updateActiveSlide(index: number): void {
    this.activeSlideIndex = index
  }

  increaseQuantity(): void {
      this.quantity++
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--
    }
  }

  addToCart(): void {
    console.log('Added to cart:', {
      product: this.product.name,
      quantity: this.quantity,
      price: this.product.price
    })
  }

  buyNow(): void {
    this.addToCart()
  }
}
