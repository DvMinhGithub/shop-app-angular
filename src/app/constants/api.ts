import { HttpHeaders } from '@angular/common/http'
import { IListProductsRequest } from '../shared/models/product'
import { IPagination } from '../shared/models/request'

export const Url = 'http://localhost:8080/api/v1'

export const headersApi = (refreshToken?: string): HttpHeaders => {
  let headers = new HttpHeaders()

  headers = headers.set('Content-Type', 'application/json')

  const accessToken = localStorage.getItem('access_token')
  const tokenToUse = refreshToken || accessToken

  if (tokenToUse) {
    headers = headers.set('Authorization', `Bearer ${tokenToUse}`)
  }

  return headers
}

export const userApi = {
  register: `${Url}/users/register`,
  login: `${Url}/users/login`,
  details: `${Url}/users/details`
}

export const roleApi = {
  getRoles: `${Url}/roles`
}

export const productApi = {
  getProducts: (request: IListProductsRequest) =>
    `${Url}/products?keyword=${request.keyword}&categoryId=${request.categoryId}&page=${request.page}&limit=${request.limit}`,
  getProducDetail: (id: number): string => `${Url}/products/${id}`,
  getProductByIds: (ids: number[]): string => `${Url}/products/ids?ids=${ids.join(',')}`
}

export const categoryApi = {
  getCategories: `${Url}/categories`
}

export const orderApi = {
  createOrder: `${Url}/orders`,
  getOrder: (orderId: number): string => `${Url}/orders/${orderId}`,
  getOrdersByKey: (key: string, pagi: IPagination): string =>
    `${Url}/orders/all?keyword=${key}&page=${pagi.page - 1}&size=${pagi.limit}`
}

export const orderDetailApi = {
  createOrderDetail: `${Url}/order-details`,
  getOrderDetail: (orderId: number): string => `${Url}/order-details/${orderId}`
}
