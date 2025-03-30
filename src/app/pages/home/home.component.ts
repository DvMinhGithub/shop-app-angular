import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { ICategory } from 'src/app/types/category';
import { IListProductsRequest, IProduct, IProductListResponse } from 'src/app/types/product';
import { IApiResponse } from 'src/app/types/response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];
  totalPages = 0;
  searchProduct: IListProductsRequest = {
    keyword: '',
    categoryId: 0,
    page: 1,
    limit: 12
  };

  // Thêm trạng thái loading
  isLoadingProducts = true;
  isLoadingCategories = true;
  isInitialLoad = true;

  constructor(
    private productService: ProductService, 
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(): void {
    this.isLoadingProducts = true;
    
    this.productService.getProducts(this.searchProduct).subscribe({
      next: (res: IApiResponse<IProductListResponse>) => {
        this.products = res.result.products;
        this.totalPages = res.result.totalPages;
        this.isLoadingProducts = false;
        this.isInitialLoad = false;
      },
      error: (error: Error) => {
        console.error('There was an error!', error);
        this.isLoadingProducts = false;
        this.isInitialLoad = false;
      }
    });
  }

  loadCategories(): void {
    this.isLoadingCategories = true;
    
    this.categoryService.getCategories().subscribe({
      next: (res: IApiResponse<ICategory[]>) => {
        this.categories = res.result;
        this.isLoadingCategories = false;
      },
      error: (error: Error) => {
        console.error('There was an error!', error);
        this.isLoadingCategories = false;
      }
    });
  }

  onPageChange(page: number): void {
    this.searchProduct.page = page;
    this.loadProducts();
    window.scrollTo(0, 0);
  }

  // Helper method để kiểm tra trạng thái loading tổng thể
  get isLoading(): boolean {
    return this.isLoadingProducts || (this.isInitialLoad && this.products.length === 0);
  }
}