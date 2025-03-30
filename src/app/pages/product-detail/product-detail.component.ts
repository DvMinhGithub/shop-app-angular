import { Component, OnInit, ViewChild } from '@angular/core'
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o'
import { ProductService } from 'src/app/services/product.service'
import { IProduct } from 'src/app/types/product'
import { IApiResponse } from 'src/app/types/response'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('mainCarousel') mainCarousel!: CarouselComponent
  @ViewChild('thumbnailCarousel') thumbnailCarousel!: CarouselComponent

  product!: IProduct
  isLoading = true  

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

  constructor (private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductDetail()
  }

  loadProductDetail(): void {
    const productId = 1
    if (!productId) {
      console.error('Product ID is not found')
      return
    }
    this.productService.getProductDetail(productId).subscribe({
      next: (res: IApiResponse<IProduct>) => {
        this.product = res.result
        this.isLoading = false
      },
      error: (err) => {
        console.error(err)
        this.isLoading = false
      }
    })
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
