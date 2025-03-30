import { IProduct } from '../types/product'

export const getProductImage = (product: IProduct): string => {
  return product.thumbnail[0] || '../../assets/images/no-image.png'
}
