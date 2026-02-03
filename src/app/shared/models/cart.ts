export interface CartItem {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
  quantity: number
}

export interface CartItemMergeRequest {
  productId: number
  quantity: number
}
