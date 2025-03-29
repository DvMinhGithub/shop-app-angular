import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { productApi } from '../contant/api'
import { IApiResponse } from '../types/response'
import { IPagination } from '../types/request'
import { IListProductsRequest, IProductListResponse } from '../types/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(request: IListProductsRequest): Observable<IApiResponse<IProductListResponse>> {
    return this.http.get<IApiResponse<IProductListResponse>>(productApi.getProducts(request))
  }
}
