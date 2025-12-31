import { Directive, ElementRef, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit {

  @Output() visible = new EventEmitter<boolean>();

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.visible.emit(entry.isIntersecting); // emit true/false
      },
      {
        threshold: 0.35,
        rootMargin: '0px 0px -120px 0px'
      }
    );

    observer.observe(this.el.nativeElement);
  }
}
