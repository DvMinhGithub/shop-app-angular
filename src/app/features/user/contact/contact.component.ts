import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ContactService } from './services/contact.service'
import { Router } from '@angular/router'
import { IContactRequest } from 'src/app/shared/models/interface/request'
import { finalize } from 'rxjs/operators'
import { IApiResponse } from 'src/app/shared/models/interface/response'
type ValidationMessages = Record<string, Record<string, string>>
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  isLoading = false
  errorMessage: string | null = null
  contactForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    })
  }

  // Trong component.ts - thêm getter
  get nameControl() {
    return this.contactForm.get('name')
  }
  get emailControl() {
    return this.contactForm.get('email')
  }
  get messageControl() {
    return this.contactForm.get('message')
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName)
    return !!control?.invalid && !!control?.touched
  }

  validationMessages: ValidationMessages = {
    name: {
      required: 'Name is required'
    },
    email: {
      required: 'Email is required',
      email: 'Email is invalid'
    },
    message: {
      required: 'Message is required'
    }
  }

  onSubmit(): void {
    this.errorMessage = null

    if (this.contactForm.invalid) {
      this.markFormGroupTouched(this.contactForm)
      return
    }

    this.isLoading = true
    const credentials: IContactRequest = this.contactForm.value

    this.contactService
      .contact(credentials)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (res: IApiResponse<any>) => {
          console.log(res)
        },
        error: (error: any) => {
          console.error('Contact error:', error)
          this.errorMessage = error.error?.message || 'Contact failed. Please check your information.'
        }
      })
  }

  getValidationMessage(controlName: string): string {
    const control = this.contactForm.get(controlName)
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
