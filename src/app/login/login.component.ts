import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'
import { ILoginRequest, ILoginResponse } from '../types/user'
import { IApiResponse } from '../types/response'
import { TokenService } from '../services/token.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService, private tokenService: TokenService , private router: Router) {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log('Form submitted:', this.loginForm);
    
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
