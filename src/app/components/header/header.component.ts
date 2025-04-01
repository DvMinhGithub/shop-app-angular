import { Component, OnInit } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'
import { UserService } from 'src/app/services/user.service'
import { IUser } from 'src/app/types/user'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false
  orderCount = 0
  currentUser!: IUser | null
  menuItems = [
    { label: 'Trang Chủ', link: '/' },
    { label: 'Giỏ Hàng', link: '/order' },
    { label: 'Dịch Vụ', link: '/services' },
    { label: 'Liên Hệ', link: '/contact' }
  ]

  constructor(private cartService: CartService, private userService: UserService) {}

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
    this.currentUser = this.userService.getUser()
  }

  ngOnInit(): void {
    this.orderCount = this.cartService.getCart().size
    this.currentUser = this.userService.getUser()
    console.log(this.currentUser);
  }
}
