import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FooterComponent } from './footer/footer.component'
import { HeaderComponent } from './header/header.component'
import { MainLayoutComponent } from './main-layout/main-layout.component'
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzIconService } from 'ng-zorro-antd/icon';
import {
  ArrowUpOutline,
  FacebookFill,
  InstagramFill,
  MailFill,
} from '@ant-design/icons-angular/icons';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzBackTopModule,
    NzButtonModule,
    NzIconModule
  ],
  exports: [MainLayoutComponent]
})
export class LayoutsModule {
  constructor(private iconService: NzIconService) {
    this.iconService.addIcon(
      ArrowUpOutline,
      FacebookFill,
      InstagramFill,
      MailFill
    );

  }
} 