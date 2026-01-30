import { Component, HostListener } from '@angular/core'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isMenuOpen = false

  menuItems = [
    { icon: '📋', text: 'Đơn hàng', link: '/admin/orders' },
    { icon: '🏠', text: 'Tổng quan', link: '/admin' }
  ]

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler() {
    if (this.isMenuOpen) {
      this.toggleMenu()
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }
}
