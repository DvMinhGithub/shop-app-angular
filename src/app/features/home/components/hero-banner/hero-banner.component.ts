import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent {
  constructor(private router: Router) {}

  navigateToProducts() {
    this.router.navigate(['/products'])
  }
}
