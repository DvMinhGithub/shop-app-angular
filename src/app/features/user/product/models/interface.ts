export interface Product {
  id: number
  name: string
  price: number
  category: string
  image: string
}

export interface CategoryOption {
  label: string
  value: string
  checked: boolean
}