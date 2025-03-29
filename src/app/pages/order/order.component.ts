import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrderItem } from 'src/app/types/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orderForm: FormGroup;
  couponCode = '';
  orderItems: IOrderItem[] = [
    {
      id: 1,
      name: 'iPhone 14 Pro Max',
      image: '../../assets/images/product.png',
      price: 29990000,
      quantity: 1
    },
    {
      id: 2,
      name: 'AirPods Pro 2',
      image: '../../assets/images/product.png',
      price: 5990000,
      quantity: 2
    }
  ];

  constructor(private fb: FormBuilder) {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,11}$/)]],
      address: ['', Validators.required]
    });
  }

  get totalPrice(): number {
    return this.orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  applyCoupon(): void {
    if (this.couponCode) {
      console.log('Applying coupon:', this.couponCode);
    }
  }

  submitOrder(): void {
    if (this.orderForm.valid) {
      const orderData = {
        customerInfo: this.orderForm.value,
        items: this.orderItems,
        coupon: this.couponCode,
        total: this.totalPrice
      };
      console.log('Order submitted:', orderData);
    } else {
      this.orderForm.markAllAsTouched();
    }
  }

  updateQuantity(item: IOrderItem, newQuantity: number): void {
    if (newQuantity > 0) {
      item.quantity = newQuantity;
    }
  }

  removeItem(itemId: number): void {
    this.orderItems = this.orderItems.filter(item => item.id !== itemId);
  }
}