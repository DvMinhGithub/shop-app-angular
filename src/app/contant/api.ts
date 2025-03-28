import { HttpHeaders } from '@angular/common/http'
import { IPagination } from '../types/request'

export const Url = 'http://localhost:8080/api/v1'

export const headersApi = (refreshToken?: string): HttpHeaders => {
  let headers = new HttpHeaders()

  headers = headers.set('Content-Type', 'application/json')

  const accessToken = localStorage.getItem('accessToken')
  const tokenToUse = refreshToken || accessToken

  if (tokenToUse) {
    headers = headers.set('Authorization', `Bearer ${tokenToUse}`)
  }

  return headers
}

export const userApi = {
  register: `${Url}/users/register`,
  login: `${Url}/users/login`
}

export const roleApi = {
  getRoles: `${Url}/roles`
}

export const productApi = {
  getProducts: (pagination: IPagination) => `${Url}/products?limit=${pagination.limit}&page=${pagination.page}`,
  getProduct: (id: string): string => `${Url}/products/${id}`
}
