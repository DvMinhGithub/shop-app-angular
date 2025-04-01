import { Injectable } from '@angular/core'
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY = 'access_token'
  private jwtHelper = new JwtHelperService()

  getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  getUserId(): number | null {
    const token = this.getToken()
    if (!token) {
      return null
    }

    const decodedToken = this.jwtHelper.decodeToken(token)
    return decodedToken?.userId
  }

  setToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token)
  }

  removeToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY)
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token)
  }
}
