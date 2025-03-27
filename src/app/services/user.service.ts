import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { headersApi, userApi } from '../contant/api'
import { ILoginRequest, ILoginResponse, IRegisterRequest } from '../types/user'
import { Observable } from 'rxjs'
import { IApiResponse } from '../types/response'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: IRegisterRequest): Observable<IApiResponse<any>> {
    return this.http.post<IApiResponse<any>>(userApi.register, user, { headers: headersApi()});
  }

  login(user: ILoginRequest): Observable<IApiResponse<ILoginResponse>> {
    return this.http.post<IApiResponse<ILoginResponse>>(userApi.login, user, { headers: headersApi()})
  }
}
