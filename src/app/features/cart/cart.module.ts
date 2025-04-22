import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { SharedModule } from '../../shared/share.module'
import { CartComponent } from './component/cart/cart.component'

const routes: Routes = [
  {
    path: '',
    component: CartComponent
  }
]

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, FormsModule, SharedModule, RouterModule.forChild(routes)]
})
export class CartModule {}
