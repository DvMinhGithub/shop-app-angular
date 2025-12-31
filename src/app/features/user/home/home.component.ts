import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { BannerItem, VideoItem } from './models/interface';
import {
  mockBanner,
  mockImage,
  mockImage2,
  mockPartnerLogos,
  mockVideo
} from './models/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  /* ===== Lazy sections ===== */
  showVideoSection = false;
  showBannerContent = false;
  showPartner = false;
  showInfo = false;
  showCTA = false;
  showContact = false;
  showMap = false;


  /* ===== Carousel ===== */
  carouselReady = false;
  carousel2Ready = false;
  images = mockImage;
  images2 = mockImage2;

  /* ===== Video ===== */
  showVideo = false;
  videoUrl!: SafeResourceUrl;
  videoList: VideoItem[] = mockVideo;

  /* ===== Banner grid ===== */
  bannerList: BannerItem[] = mockBanner;

  /* ===== Partner ===== */
  partnerLogos = mockPartnerLogos;
  loopLogos: string[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loopLogos = [...this.partnerLogos, ...this.partnerLogos];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.carouselReady = true;
      this.carousel2Ready = true;
    });
  }

  /* ===== Lazy visible handlers ===== */
  onVideoVisible(v: boolean): void {
    if (v) this.showVideoSection = true;
  }

  onBannerVisible(v: boolean): void {
    if (v) this.showBannerContent = true;
  }

  onPartnerVisible(v: boolean): void {
    if (v) this.showPartner = true;
  }

  onInfoVisible(v: boolean): void {
    if (v) this.showInfo = true
  }

  onCTAVisible(v: boolean): void {
    if (v) this.showCTA = true;
  }

  onContactVisible(v: boolean): void {
    if (v) this.showContact = true
  }

  onMapVisible(v: boolean): void {
    if (v) this.showMap = true
  }

  /* ===== Video modal ===== */
  openVideo(url: string): void {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      url + '?autoplay=1'
    );
    this.showVideo = true;
  }

  closeVideo(): void {
    this.showVideo = false;
  }

  /* ===== Banner rows ===== */
  get fullRows(): BannerItem[] {
    return this.bannerList.slice(
      0,
      Math.floor(this.bannerList.length / 3) * 3
    );
  }

  get lastRow(): BannerItem[] {
    return this.bannerList.slice(
      Math.floor(this.bannerList.length / 3) * 3
    );
  }
}
