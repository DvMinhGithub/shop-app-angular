import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.registerForm = this.fb.group(
      {
        phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        retypedPassword: ['', Validators.required],
        fullName: ['', [Validators.required, Validators.minLength(6)]],
        dateOfBirth: ['', Validators.required],
        address: ['', [Validators.required, Validators.minLength(6)]],
        agreeTerms: [false, Validators.requiredTrue]
      },
      { validators: this.passwordMatchValidator }
    )
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value
    const retypedPassword = form.get('retypedPassword')?.value
    return password === retypedPassword ? null : { mustMatch: true }
  }

  validateAge() {
    const dateOfBirth = this.registerForm.get('dateOfBirth')?.value
    if (dateOfBirth) {
      const today = new Date()
      const birthDate = new Date(dateOfBirth)
      var age = today.getFullYear() - birthDate.getFullYear()
      const monthDifference = today.getMonth() - birthDate.getMonth()
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      if (age < 18) {
        this.registerForm.get('dateOfBirth')?.setErrors({ invalidAge: true })
      } else {
        this.registerForm.get('dateOfBirth')?.setErrors(null)
      }
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted successfully:', this.registerForm.value)
      this.userService.register(this.registerForm.value).subscribe({
        next: (res) => {
          console.log('User registered:', res)
        },
        error: (error: Error) => {
          console.error('Error registering user:', error)
        },
        complete: () => {
          console.log('User registered successfully')
          // this.router.navigate(['/login']);
        }
      })
    } else {
      console.log('Form is invalid. Please check your inputs.')
      this.markFormGroupTouched(this.registerForm)
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched()
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control)
      }
    })
  }
}
