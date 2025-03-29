import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly ACCESS_TOKEN_KEY = 'access_token'

  getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  setToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token)
  }

  removeToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY)
  }
}
