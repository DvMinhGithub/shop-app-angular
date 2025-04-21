import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from 'src/app/core/services/user.service'
import { IApiResponse } from 'src/app/shared/models/response'
import { IRegisterRequest } from 'src/app/shared/models/user'


type ValidationMessages = Record<string, Record<string, string>>

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup
  isLoading = false
  errorMessage: string | null = null
  today = new Date().toISOString().split('T')[0]

  validationMessages: ValidationMessages = {
    phoneNumber: {
      required: 'Số điện thoại là bắt buộc',
      minlength: 'Số điện thoại phải có ít nhất 10 số',
      pattern: 'Số điện thoại không hợp lệ'
    },
    password: {
      required: 'Mật khẩu là bắt buộc',
      minlength: 'Mật khẩu phải có ít nhất 6 ký tự'
    },
    retypedPassword: {
      required: 'Vui lòng nhập lại mật khẩu',
      mustMatch: 'Mật khẩu không khớp'
    },
    fullName: {
      required: 'Họ tên là bắt buộc',
      minlength: 'Họ tên phải có ít nhất 6 ký tự'
    },
    dateOfBirth: {
      required: 'Ngày sinh là bắt buộc',
      invalidAge: 'Bạn phải đủ 18 tuổi trở lên'
    },
    address: {
      required: 'Địa chỉ là bắt buộc',
      minlength: 'Địa chỉ phải có ít nhất 6 ký tự'
    },
    agreeTerms: {
      required: 'Bạn phải đồng ý điều khoản'
    }
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.registerForm = this.fb.group(
      {
        phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^[0-9]*$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        retypedPassword: ['', Validators.required],
        fullName: ['', [Validators.required, Validators.minLength(6)]],
        dateOfBirth: ['', [Validators.required, this.ageValidator]],
        address: ['', [Validators.required, Validators.minLength(6)]],
        agreeTerms: [false, Validators.requiredTrue]
      },
      {
        validator: this.passwordMatchValidator
      }
    )
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value
    const retypedPassword = control.get('retypedPassword')?.value

    return password && retypedPassword && password !== retypedPassword ? { mustMatch: true } : null
  }

  ageValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null

    const birthDate = new Date(control.value)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    return age >= 18 ? null : { invalidAge: true }
  }

  onSubmit(): void {
    this.errorMessage = null

    if (this.registerForm.invalid) {
      this.markFormGroupTouched(this.registerForm)
      return
    }

    this.isLoading = true
    const formData: IRegisterRequest = this.registerForm.value

    this.userService.register(formData).subscribe({
      next: (res: IApiResponse<any>) => {
        console.log('Registration response:', res);
        
        this.router.navigate(['/login'])
      },
      error: (error) => {
        console.error('Registration error:', error)
        this.errorMessage = error.error?.message || 'Đăng ký thất bại. Vui lòng thử lại.'
        this.isLoading = false
      },
      complete: () => {
        this.isLoading = false
      }
    })
  }

  getValidationMessage(controlName: string): string {
    const control = this.registerForm.get(controlName)
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

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control)
      }
    })
  }
}
