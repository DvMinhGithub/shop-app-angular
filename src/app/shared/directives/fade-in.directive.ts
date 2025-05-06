import { Directive, ElementRef, OnInit } from '@angular/core'

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.classList.add('animate-fadeIn')
  }
}
