import { Component, OnInit } from '@angular/core'
import { UserService } from '@features/auth/services/user.service'
import { CartService } from '@features/cart/services/cart.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false
  orderCount = 0
  currentUser = this.userService.currentUser
  menuItems = [
    { label: 'Trang Chủ', link: '/' },
    { label: 'Giỏ Hàng', link: '/cart' },
    { label: 'Đơn Hàng', link: '/orders' }
  ]

  constructor(
    public cartService: CartService,
    private userService: UserService
  ) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  logout(): void {
    this.userService.logout()
  }

  ngOnInit(): void {
    this.orderCount = this.cartService.getCart().size
  }
}
