import { IProduct } from './interface'

export const mockImage = [
  'assets/images/son-tadapha-33.png',
  'assets/images/son-tadapha-34.png',
  'assets/images/son-tadapha-35.png',
  'assets/images/son-tadapha-36.png',
  'assets/images/son-tadapha-37.png',
  'assets/images/son-tadapha-38.png'
]

export const MOCK_PRODUCTS: IProduct[] = Array.from({ length: 36 }).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 500),
  category: ['Shoes', 'Shirt', 'Bag', 'Watch'][i % 4],
  image: mockImage[i % mockImage.length]
}))

export const PRODUCT_MOCK: IProduct = {
  id: 1,
  name: 'Minimal Chair',
  price: 10000,
  category: 'Shoes',
  shortDescription: 'Ghế tối giản phong cách Bắc Âu',
  description: 'Sản phẩm được làm từ gỗ sồi tự nhiên, bền bỉ và thân thiện môi trường.',
  image: 'https://picsum.photos/600/600',
  rating: 4.5,
  viewCount: 1240,
  author: 'Admin',
  reviews: [
    {
      userName: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/40',
      rating: 5,
      createdAt: '2025-01-01',
      comment: 'Sản phẩm rất đẹp và chắc chắn.',
      like: 12,
      dislike: 0
    }
  ],
  relatedProducts: Array.from({ length: 6 }).map((_, i) => ({
    id: i + 2,
    name: `Product ${i + 1}`,
    price: 10000,
    category: ['Shoes', 'Shirt', 'Bag', 'Watch'][i % 4],
    shortDescription: 'Mô tả ngắn',
    description: '',
    image: 'https://picsum.photos/300/300',
    rating: 4,
    viewCount: 0,
    author: '',
    reviews: [],
    relatedProducts: []
  }))
}
