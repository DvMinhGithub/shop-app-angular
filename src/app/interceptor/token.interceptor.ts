import { HttpInterceptor } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { TokenService } from '../services/token.service'

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(req: any, next: any) {
    const token = this.tokenService.getToken()
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(req)
  }
}
