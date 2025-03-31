import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { headersApi, orderApi } from '../contant/api'
import { IOrderCreateRequest } from '../types/order'

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(request: IOrderCreateRequest): Observable<IOrderCreateRequest> {
    return this.http.post<IOrderCreateRequest>(orderApi.createOrder, request, { headers: headersApi() })
  }
}
