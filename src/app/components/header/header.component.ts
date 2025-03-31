import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false

  menuItems = [
    { label: 'Trang Chủ', link: '/' },
    { label: 'Giỏ Hàng', link: '/order' },
    { label: 'Dịch Vụ', link: '/services' },
    { label: 'Liên Hệ', link: '/contact' }
  ]
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }
}
