import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { headersApi, orderApi } from '../contant/api'
import { IOrderCreateRequest, IOrderResponse } from '../types/order'
import { IApiResponse } from '../types/response'

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
}
