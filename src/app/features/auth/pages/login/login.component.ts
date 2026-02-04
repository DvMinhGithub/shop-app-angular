import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { finalize } from 'rxjs/operators'
import { TokenService } from '@features/auth/services/token.service'
import { UserService } from '@features/auth/services/user.service'
import { CartService } from '@features/cart/services/cart.service'
import { IApiResponse } from '@shared/models/response'
import { IUser, ILoginRequest, ILoginResponse } from '@shared/models/user'

type ValidationMessages = Record<string, Record<string, string>>

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup
  showPassword = false
  isLoading = false
  errorMessage: string | null = null
  userDetail!: IUser

  validationMessages: ValidationMessages = {
    phoneNumber: {
      required: 'Số điện thoại là bắt buộc',
      minlength: 'Số điện thoại phải có ít nhất 10 số',
      pattern: 'Số điện thoại không hợp lệ'
    },
    password: {
      required: 'Mật khẩu là bắt buộc',
      minlength: 'Mật khẩu phải có ít nhất 6 ký tự'
    }
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private tokenService: TokenService,
    private cartService: CartService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    })
  }

  onSubmit(): void {
    this.errorMessage = null

    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm)
      return
    }

    this.isLoading = true
    const credentials: ILoginRequest = this.loginForm.value

    this.userService
      .login(credentials)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res: IApiResponse<ILoginResponse>) => {
          this.tokenService.setToken(res.result.token)
          this.cartService.mergeCart()
          this.getUserDetails()
          this.router.navigate(['/'])
        },
        error: (error) => {
          console.error('Login error:', error)
          this.errorMessage = error.error?.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.'
        }
      })
  }

  getUserDetails(): void {
    this.userService.details().subscribe({
      next: (res) => {
        this.userDetail = res.result
        this.userService.saveUser(res.result)
        if (this.userDetail.role.name === 'admin') {
          this.router.navigate(['/admin'])
        }
      },
      error: (error) => {
        console.error('Get user details error:', error)
      }
    })
  }

  getValidationMessage(controlName: string): string {
    const control = this.loginForm.get(controlName)
    if (control?.errors && control.touched) {
      for (const error in control.errors) {
        if (control.errors && Object.hasOwn(control.errors, error)) {
          const messages = this.validationMessages[controlName as keyof typeof this.validationMessages]
          return messages[error as keyof typeof messages] || ''
        }
      }
    }
    return ''
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control)
      }
    })
  }
}
