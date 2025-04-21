import { inject, Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { TokenService } from '../services/token.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private tokenService: TokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isUserIdValid: boolean = this.tokenService.getUserId() > 0
    if (!this.tokenService.isTokenExpired() && isUserIdValid) {
      return true
    }

    this.router.navigate(['/login'])
    return false
  }
}

export const AuthGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivate(route, state)
}
