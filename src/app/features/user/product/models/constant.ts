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
  reviewSummary: {
    avg: 4.5,
    total: 45,
    stars: [
      { star: 5, count: 30, percent: 66.7 },
      { star: 4, count: 10, percent: 22.2 },
      { star: 3, count: 3, percent: 6.7 },
      { star: 2, count: 1, percent: 2.2 },
      { star: 1, count: 1, percent: 2.2 }
    ]
  },
  reviews: [
    {
      userName: 'Nguyễn Văn A',
      avatar: 'https://i.pravatar.cc/40',
      rating: 5,
      createdAt: '2025-01-01',
      comment: 'Sản phẩm rất đẹp và chắc chắn.',
      like: 12,
      dislike: 0
    },
    {
      userName: 'Trần Thị B',
      avatar: 'https://i.pravatar.cc/41',
      rating: 4,
      createdAt: '2025-02-15',
      comment: 'Giao hàng nhanh, sản phẩm đúng mô tả.',
      like: 8,
      dislike: 1
    },
    {
      userName: 'Lê Văn C',
      avatar: 'https://i.pravatar.cc/42',
      rating: 5,
      createdAt: '2025-03-10',
      comment: 'Rất hài lòng với chất lượng sản phẩm.',
      like: 15,
      dislike: 0
    },
    {
      userName: 'Phạm Thị D',
      avatar: 'https://i.pravatar.cc/43',
      rating: 3,
      createdAt: '2025-04-05',
      comment: 'Sản phẩm ổn, nhưng giao hàng hơi chậm.',
      like: 5,
      dislike: 2
    }
  ],
  relatedProducts: Array.from({ length: 6 }).map((_, i) => ({
    id: i + 2,
    name: `Product ${i + 1}`,
    tag: ['New', 'Hot', 'Sale'][i % 3],
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
