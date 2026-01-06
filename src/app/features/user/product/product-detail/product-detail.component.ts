import { Component, Injector } from '@angular/core'
import { finalize, takeUntil } from 'rxjs'
import { ComponentBaseAbstract } from 'src/app/shared/abstract/component.base.abstract'
import { ProductService } from '../service/product.service'
import { IProduct } from '../models/interface'
import { PRODUCT_MOCK } from '../models/constant'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent extends ComponentBaseAbstract {
  product!: IProduct

  // ===== Skeleton loading flags =====
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
          // tắt spinner global
          this.loadingService.hide()

          // tắt skeleton theo từng khối
          this.loadingProduct = false
          this.loadingRelated = false
          this.loadingReviews = false
          this.loadingAbout = false
        })
      )
      .subscribe({
        next: (res) => {
          // fallback mock nếu API trả null
          this.product = res?.data ?? PRODUCT_MOCK
        },
        error: () => {
          // fallback toàn bộ khi lỗi API
          this.product = PRODUCT_MOCK
        }
      })
  }
}
