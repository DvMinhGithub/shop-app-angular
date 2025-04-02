import { inject, Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router'
import { TokenService } from 'src/app/services/token.service'
import { UserService } from 'src/app/services/user.service'
import { IUser } from 'src/app/types/user'

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {
  constructor(private router: Router, private tokenService: TokenService, private userService: UserService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user: IUser = this.userService.getUser()
    if (user.role.name === 'ADMIN') {
      return true
    }

    this.router.navigate(['/login'])
    return false
  }
}

export const AdminGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AdminGuard).canActivate(route, state)
}
