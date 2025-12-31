import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MENU_USER } from './shared/models/constants/menu-user';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // img = {''}
  appName = 'Sơn TADAPHA';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('?')[0];
        const label = this.findLabelByRoute(currentRoute);
        document.title = label ? `${this.appName} - ${label}` : this.appName;
      }
    });
  }

  private findLabelByRoute(route: string): string | null {
    for (const item of MENU_USER) {
      // So sánh route chính
      if (item.link === route || ('/' + item.link) === route) {
        return item.label;
      }

      // Kiểm tra children
      if (item.children) {
        const child = item.children.find(c => c.link === route || ('/' + c.link) === route);
        if (child) return child.label;
      }
    }
    return null;
  }
}
