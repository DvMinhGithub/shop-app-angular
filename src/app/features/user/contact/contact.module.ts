import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactRoutingModule } from './contact-routing.module'
import { ContactComponent } from './contact.component'
import { ContactService } from './services/contact.service'
import { ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, ContactRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [ContactService]
})
export class ContactModule {}
