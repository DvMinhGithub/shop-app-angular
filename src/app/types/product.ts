export interface IProduct {
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  price: number; // Giá hiện tại
  originalPrice?: number; // Giá gốc (nếu có)
  warranty?: number; // Thời gian bảo hành (tháng)
  thumbnail: string[];
  categoryId: number;

}

export interface IProductListResponse {
  products: IProduct[]
  totalPages: number
}
