import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { userApi, headersApi } from 'src/app/constant/api'
import { IApiResponse } from 'src/app/shared/models/interface/response'
import { ILoginRequest, ILoginResponse, IRegisterRequest, IUser } from 'src/app/shared/models/interface/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(user: IRegisterRequest): Observable<IApiResponse<any>> {
    return this.http.post<IApiResponse<any>>(userApi.register, user, { headers: headersApi() })
  }

  login(user: ILoginRequest): Observable<IApiResponse<ILoginResponse>> {
    return this.http.post<IApiResponse<ILoginResponse>>(userApi.login, user, { headers: headersApi() })
  }

  logout: () => void = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  details(): Observable<IApiResponse<IUser>> {
    return this.http.get<IApiResponse<IUser>>(userApi.details, { headers: headersApi() })
  }

  getUser(): IUser | null {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }

  saveUser(user: IUser | null): void {
    localStorage.setItem('user', JSON.stringify(user))
  }
}
