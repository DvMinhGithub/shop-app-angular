import { Component } from '@angular/core'
import { ProductService } from '@features/products/services/product.service'
import { IListProductsRequest, IProduct, IProductListResponse } from '@shared/models/product'
import { IApiResponse } from '@shared/models/response'

interface Product {
  id: number
  name: string
  price: number
  discountPrice?: number
  image: string
  description: string
}

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {
  featuredProducts: IProduct[] = []
  totalPages = 0
  searchProduct: IListProductsRequest = {
    keyword: '',
    categoryId: 0,
    page: 1,
    limit: 12
  }

  isLoadingProducts = true

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(): void {
    this.isLoadingProducts = true

    this.productService.getProducts(this.searchProduct).subscribe({
      next: (res: IApiResponse<IProductListResponse>) => {
        this.featuredProducts = res.result.products
        this.totalPages = res.result.totalPages
        this.isLoadingProducts = false
      },
      error: (error: Error) => {
        console.error('There was an error!', error)
        this.isLoadingProducts = false
      }
    })
  }

  loadMore(): void {
    this.loadProducts()
  }
}
