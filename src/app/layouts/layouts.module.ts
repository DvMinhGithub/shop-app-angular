import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { MainLayoutComponent } from './main-layout/main-layout.component'

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [MainLayoutComponent]
})
export class LayoutsModule {} 