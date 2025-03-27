import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { RoleService } from 'src/app/services/role.service'
import { TokenService } from 'src/app/services/token.service'
import { UserService } from 'src/app/services/user.service'
import { IApiResponse } from 'src/app/types/response'
import { IRole } from 'src/app/types/role'
import { ILoginRequest, ILoginResponse } from 'src/app/types/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup
  roles: IRole[] = []

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenService,
    private rolesService: RoleService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roleId: [null, [Validators.required] ]
    })
  }

  ngOnInit(): void {
    this.rolesService.getRoles().subscribe({
      next: (res: IApiResponse<IRole[]>) => {
        this.roles = res.result
      },
      error: (error: Error) => {
        console.error('There was an error!', error)
      }
    })
  }

  onSubmit() {
    console.log('Form submitted:', this.loginForm)

    if (this.loginForm.valid) {
      const user: ILoginRequest = this.loginForm.value
      this.userService.login(user).subscribe({
        next: (res: IApiResponse<ILoginResponse>) => {
          const { token } = res.result
          this.tokenService.setToken(token)
          // this.router.navigate(['/'])
        },
        error: (error: Error) => {
          console.error('There was an error!', error)
        }
      })
    } else {
      this.markFormGroupTouched(this.loginForm)
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
      if ((control as any).controls) {
        this.markFormGroupTouched(control as FormGroup)
      }
    })
  }
}
