import { HttpClient } from '@angular/common/http'
import { Injectable, signal } from '@angular/core'
import { IApiResponse } from '@shared/models/response'
import { ILoginRequest, ILoginResponse, IRegisterRequest, IUser } from '@shared/models/user'
import { Observable } from 'rxjs'
import { headersApi, userApi } from 'src/app/constants/api'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = signal<IUser | null>(this.getUser())

  constructor(private http: HttpClient) {}

  register(user: IRegisterRequest): Observable<IApiResponse<IUser>> {
    return this.http.post<IApiResponse<IUser>>(userApi.register, user, { headers: headersApi() })
  }

  login(user: ILoginRequest): Observable<IApiResponse<ILoginResponse>> {
    return this.http.post<IApiResponse<ILoginResponse>>(userApi.login, user, { headers: headersApi() })
  }

  logout: () => void = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.currentUser.set(null)
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
    this.currentUser.set(user)
  }
}
