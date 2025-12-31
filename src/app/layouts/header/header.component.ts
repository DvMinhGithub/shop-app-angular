import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { MENU_USER } from 'src/app/shared/models/constants/menu-user';
import { IUser } from 'src/app/shared/models/interface/user';

interface MenuItem {
  label: string;
  link?: string;
  children?: {
    label: string;
    link: string;
  }[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  openSubMenu: string | null = null;

  orderCount = 0;
  currentUser: IUser | null = null;

  menuItems: MenuItem[] = MENU_USER

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.openSubMenu = null;

    if (this.isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  toggleSubMenu(label: string): void {
    this.openSubMenu = this.openSubMenu === label ? null : label;
  }

  isParentActive(children?: { label: string; link: string }[]): boolean {
    if (!children || !children.length) {
      return false;
    }

    return children.some(child =>
      this.router.url.startsWith(child.link)
    );
  }

  logout(): void {
    this.userService.logout();
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
  }
}
