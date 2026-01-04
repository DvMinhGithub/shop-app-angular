import { Directive, ElementRef, EventEmitter, Output, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit, OnDestroy {

  @Output() visible = new EventEmitter<boolean>();

  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        this.visible.emit(entry.isIntersecting); // emit true/false
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -120px 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  disconnect() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = undefined;
    }
  }

  ngOnDestroy() {
    this.disconnect();
  }
}
