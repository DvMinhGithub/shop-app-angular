import { Component, Injector } from '@angular/core'
import { finalize, takeUntil } from 'rxjs'
import { ComponentBaseAbstract } from 'src/app/shared/abstract/component.base.abstract'
import { ProductService } from '../service/product.service'
import { IProduct } from '../models/interface'
import { PRODUCT_MOCK } from '../models/constant'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent extends ComponentBaseAbstract {
  product!: IProduct

  visibleReviews = 3 // số review hiển thị ban đầu
  reviewsStep = 3 // mỗi lần load thêm

  loadingProduct = true
  loadingRelated = true
  loadingReviews = true
  loadingAbout = true

  constructor(
    injector: Injector,
    private productService: ProductService
  ) {
    super(injector)
  }

  protected override componentInit(): void {
    this.getProductDetail()
  }

  getProductDetail(): void {
    this.productService
      .getProduct('params')
      .pipe(
        takeUntil(this.ngUnsubscribe),
        finalize(() => {
          this.loadingService.hide()
          this.loadingProduct = false
          this.loadingRelated = false
          this.loadingReviews = false
          this.loadingAbout = false
        })
      )
      .subscribe({
        next: (res) => {
          this.product = res?.data ?? PRODUCT_MOCK
        },
        error: () => {
          this.product = PRODUCT_MOCK
        }
      })
  }

  showMoreReviews(): void {
    this.visibleReviews += this.reviewsStep
  }

  getTagColor(tag: string): string {
    switch (tag) {
      case 'NEW':
        return 'green'
      case 'GIẢM 5%':
        return 'red'
      case 'HOT':
        return 'volcano'
      default:
        return 'blue'
    }
  }
}
