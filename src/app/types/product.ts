interface IBaseProduct {
  id: number
  createdAt: string
  updatedAt: string
  name: string
  description: string
  price: number
  categoryId: number
}

export interface IProduct extends IBaseProduct {
  thumbnail: string[]
}

export interface IProductOrder extends IBaseProduct {
  thumbnail: IProductImage[]
}

export interface IProductImage {
  id: number
  imageUrl: string
}

export interface IListProductsRequest {
  keyword?: string
  categoryId?: number
  page: number
  limit: number
}

export interface IProductListResponse {
  products: IProduct[]
  totalPages: number
}
