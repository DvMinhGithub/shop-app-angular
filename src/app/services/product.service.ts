import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { productApi } from '../contant/api'
import { IListProductsRequest, IProductListResponse } from '../types/product'
import { IApiResponse } from '../types/response'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(request: IListProductsRequest): Observable<IApiResponse<IProductListResponse>> {
    return this.http.get<IApiResponse<IProductListResponse>>(productApi.getProducts(request))
  }
}
