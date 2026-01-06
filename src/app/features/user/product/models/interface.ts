export interface CategoryOption {
  label: string
  value: string
  checked: boolean
}

export interface IProductReview {
  userName: string
  avatar: string
  rating: number
  createdAt: string
  comment: string
  like: number
  dislike: number
}

export interface IProduct {
  id?: number
  name?: string
  price: number
  category: string
  shortDescription?: string
  description?: string
  image?: string
  rating?: number
  viewCount?: number
  author?: string
  reviews?: IProductReview[]
  relatedProducts?: IProduct[]
}
