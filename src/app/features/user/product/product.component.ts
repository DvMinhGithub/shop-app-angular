import { Component, OnInit, OnDestroy } from '@angular/core'
import { finalize, Subject, takeUntil } from 'rxjs'
import { ProductService } from './service/product.service'
import { LoadingService } from 'src/app/shared/services/loading.service'
import { IProduct } from './models/interface'
import { MOCK_PRODUCTS } from './models/constant'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()

  // TAB
  tabs = ['All', 'New', 'Popular', 'Sale']
  selectedTab = 'All'

  // CATEGORY
  categories = ['Shoes', 'Shirt', 'Bag', 'Watch']
  selectedCategories: string[] = []

  // PRICE
  priceMin = 0
  priceMax = 500

  // DATA
  allProducts: IProduct[] = []
  pagedProducts: IProduct[] = []

  // PAGINATION
  pageIndex = 1
  pageSize = 6
  total = 0

  constructor(
    private productService: ProductService,
    private loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.getProduct()
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

  // ================= API + MOCK FALLBACK =================
  getProduct(): void {
    const params = {
      page: this.pageIndex,
      size: this.pageSize,
      tab: this.selectedTab !== 'All' ? this.selectedTab : null,
      categories: this.selectedCategories,
      priceMin: this.priceMin,
      priceMax: this.priceMax
    }

    this.loadingService.show()

    this.productService
      .getProduct(params)
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => this.loadingService.hide())
      )
      .subscribe({
        next: (res) => {
          // 🔥 FALLBACK MOCK
          const data = res?.data?.length ? res.data : MOCK_PRODUCTS

          this.applyFilterAndPaging(data)
        },
        error: () => {
          // 🔥 API lỗi → dùng mock
          this.applyFilterAndPaging(MOCK_PRODUCTS)
        }
      })
  }

  // ================= FILTER + PAGING CORE =================
  applyFilterAndPaging(data: IProduct[]): void {
    let result = [...data]

    // TAB (demo)
    if (this.selectedTab !== 'All') {
      result = result.filter((_, i) => i % 2 === 0)
    }

    // CATEGORY
    if (this.selectedCategories.length) {
      result = result.filter((p) => this.selectedCategories.includes(p.category))
    }

    // PRICE
    result = result.filter((p) => p.price >= this.priceMin && p.price <= this.priceMax)

    this.total = result.length

    const start = (this.pageIndex - 1) * this.pageSize
    const end = start + this.pageSize
    this.pagedProducts = result.slice(start, end)
  }

  // ================= UI EVENTS =================
  selectTab(tab: string): void {
    this.selectedTab = tab
    this.resetPage()
  }

  toggleCategory(category: string): void {
    this.selectedCategories.includes(category)
      ? (this.selectedCategories = this.selectedCategories.filter((c) => c !== category))
      : this.selectedCategories.push(category)

    this.resetPage()
  }

  applyFilter(): void {
    if (this.priceMin > this.priceMax) {
      ;[this.priceMin, this.priceMax] = [this.priceMax, this.priceMin]
    }
    this.resetPage()
  }

  onPageChange(page: number): void {
    this.pageIndex = page
    this.getProduct()
  }

  resetPage(): void {
    this.pageIndex = 1
    this.getProduct()
  }
}
