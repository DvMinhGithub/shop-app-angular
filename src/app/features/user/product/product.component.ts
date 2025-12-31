import { Component, OnInit } from '@angular/core'
import { Product } from './models/interface'
import { mockImage } from './models/constant'
import { LoadingService } from 'src/app/shared/services/loading.service'
import { finalize, Subject, takeUntil } from 'rxjs'
import { ProductService } from './service/product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public ngUnsubscribe = new Subject();


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
  allProducts: Product[] = []
  filteredProducts: Product[] = []
  pagedProducts: Product[] = []

  // PAGINATION
  pageIndex = 1
  pageSize = 6
  total = 0

  constructor(
    private loadingService: LoadingService,
    private productService: ProductService,
  ) {

  }

  ngOnInit(): void {
    this.mockAllProducts()
    this.applyAllFilters()
  }

  getProduct() {

    this.loadingService.show()
    this.productService.getProduct('params').pipe(
      finalize(() => { this.loadingService.hide() }),
      takeUntil(this.ngUnsubscribe),
    ).subscribe({
      next: (res) => {
        console.log('SUCCESS', res);
      },
      error: (err) => {
        // console.error('ERROR', err);
      }
    }
    )
  }

  // ---------- TAB ----------
  selectTab(tab: string) {
    this.selectedTab = tab
    this.resetPage()
  }

  // ---------- CATEGORY ----------
  toggleCategory(category: string) {
    this.selectedCategories.includes(category)
      ? this.selectedCategories = this.selectedCategories.filter(c => c !== category)
      : this.selectedCategories.push(category)

    this.resetPage()
  }

  // ---------- PRICE ----------
  applyFilter() {
    if (this.priceMin > this.priceMax) {
      [this.priceMin, this.priceMax] = [this.priceMax, this.priceMin]
    }
    this.resetPage()
  }

  // ---------- PAGINATION ----------
  onPageChange(page: number) {
    this.pageIndex = page
    this.updatePagedProducts()
  }

  resetPage() {
    this.pageIndex = 1
    this.applyAllFilters()
  }

  // ---------- FILTER CORE ----------
  applyAllFilters() {
    let result = [...this.allProducts]

    // Category
    if (this.selectedCategories.length) {
      result = result.filter(p =>
        this.selectedCategories.includes(p.category)
      )
    }

    // Price
    result = result.filter(p =>
      p.price >= this.priceMin && p.price <= this.priceMax
    )

    // Tab demo
    if (this.selectedTab !== 'All') {
      result = result.slice(0, 12)
    }

    this.filteredProducts = result
    this.total = result.length

    this.updatePagedProducts()
  }

  updatePagedProducts() {
    const start = (this.pageIndex - 1) * this.pageSize
    const end = start + this.pageSize
    this.pagedProducts = this.filteredProducts.slice(start, end)
  }

  // ---------- MOCK DATA ----------
  mockAllProducts() {
    this.allProducts = Array.from({ length: 30 }).map((_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 500),
      category: this.categories[i % this.categories.length],
      image: mockImage[i % mockImage.length]
    }))
  }
}
