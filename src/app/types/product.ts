export interface IProduct {
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  price: number;
  thumbnail: string[];
  categoryId: number;
}

export interface IListProductsRequest {
  keyword?: string;
  categoryId?: number;
  page: number;
  limit: number;
}

export interface IProductListResponse {
  products: IProduct[]
  totalPages: number
}
