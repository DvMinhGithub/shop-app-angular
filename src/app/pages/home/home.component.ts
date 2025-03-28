import { Component, OnInit } from '@angular/core'
import { ProductService } from 'src/app/services/product.service'
import { IProduct, IProductListResponse } from 'src/app/types/product'
import { IPagination } from 'src/app/types/request'
import { IApiResponse } from 'src/app/types/response'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  totalPages: number = 0;
  pagination: IPagination = {
    page: 1,
    limit: 10
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts(this.pagination).subscribe({
      next: (res: IApiResponse<IProductListResponse>) => {
        this.products = res.result.products;
        this.totalPages = res.result.totalPages;
      },
      error: (error: Error) => {
        console.error('There was an error!', error);
      }
    });
  }

  onPageChange(page: number): void {
    this.pagination.page = page;
    this.loadProducts();
    window.scrollTo(0, 0);
  }
}