import { Component, ViewChild } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  @ViewChild('mainCarousel') mainCarousel!: CarouselComponent;
  @ViewChild('thumbnailCarousel') thumbnailCarousel!: CarouselComponent;

  images = [
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
    '../../assets/images/product.png',
  ];

  carouselOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
    nav: true,
    autoplay: true,
    autoplaySpeed: 5000,
    center: true,
  };

  thumbnailOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    responsive: {
      0: { items: 5 },
      600: { items: 5 },
      1000: { items: 5 },
    },
  };

  activeSlideIndex = 0;

  updateActiveSlide(index: number) {
    this.activeSlideIndex = index;
  }
}
