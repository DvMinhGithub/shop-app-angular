import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { headersApi, orderApi } from 'src/app/constant/api'
import { IOrderCreateRequest, IOrderResponse, TPaginatedOrderResponse } from 'src/app/shared/models/interface/order'
import { IPagination } from 'src/app/shared/models/interface/request'
import { IApiResponse } from 'src/app/shared/models/interface/response'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(request: IOrderCreateRequest): Observable<IOrderCreateRequest> {
    return this.http.post<IOrderCreateRequest>(orderApi.createOrder, request, { headers: headersApi() })
  }

  getOrder(orderId: number): Observable<IApiResponse<IOrderResponse>> {
    return this.http.get<IApiResponse<IOrderResponse>>(orderApi.getOrder(orderId), { headers: headersApi() })
  }

  getOrdersByKey(key: string, pagi: IPagination): Observable<IApiResponse<TPaginatedOrderResponse>> {
    return this.http.get<IApiResponse<TPaginatedOrderResponse>>(orderApi.getOrdersByKey(key, pagi), {
      headers: headersApi()
    })
  }
}
