import { Component } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menuFooter = [
    {
      title: 'Explore Colors',
      items: [
        {
          title: '<i class="fa-brands fa-instagram"></i>',
          url: '#'
        },
        {
          title: '<i class="fa-brands fa-twitter"></i>',
          url: '#'
        },
        {
          title: '<i class="fa-brands fa-facebook"></i>',
          url: '#'
        }
      ]
    },
    {
      title: 'Stay updated! Subscribe',
      items: [
        {
          title: 'Help Center',
          url: '#'
        },
        {
          title: 'Customer Support',
          url: '#'
        },
        {
          title: 'Guides & Tips',
          url: '#'
        }
      ]
    },
    {
      title: 'Support',
      items: [
        {
          title: 'Privacy Notice',
          url: '#'
        },
        {
          title: 'Site Map',
          url: '#'
        },
        {
          title: 'Memberships',
          url: '#'
        }
      ]
    },
    {
      title: 'Contact us',
      items: [
        {
          title: 'info&#64;paintpalette.com',
          url: '#'
        },
        {
          title: '+123 456 789 000',
          url: '#'
        }
      ]
    }
  ]
}
