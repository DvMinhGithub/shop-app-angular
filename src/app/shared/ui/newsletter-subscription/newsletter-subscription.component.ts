import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newsletter-subscription',
  templateUrl: './newsletter-subscription.component.html',
  styleUrls: ['./newsletter-subscription.component.scss']
})
export class NewsletterSubscriptionComponent {
  @Input() title = 'Nhận ưu đãi độc quyền';
  @Input() subtitle = 'Đăng ký email để nhận thông báo khuyến mãi sớm nhất';
  @Input() buttonText = 'Đăng ký ngay';
  @Input() showPrivacyNote = true;
  @Output() newsletterSubmit = new EventEmitter<string>();

  email = '';

  onSubmit() {
    if (this.email) {
      this.newsletterSubmit.emit(this.email);
      this.email = '';
    }
  }
}
