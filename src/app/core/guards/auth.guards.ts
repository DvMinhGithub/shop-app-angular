import { inject, Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { TokenService } from '../services/token.service'
import { IUser } from 'src/app/shared/models/interface/user'
import { UserService } from '../services/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private router: Router, private tokenService: TokenService, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user: IUser | null = this.userService.getUser()
    if (user?.role.name === 'ADMIN') {
      return true
    }

    this.router.navigate([''])
    return false
  }
}

export const AuthGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthGuard).canActivate(route, state)
}
