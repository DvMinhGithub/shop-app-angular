import {
  Component,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ChangeDetectorRef
} from '@angular/core'

@Component({
  selector: 'app-lazy-section',
  templateUrl: './lazy-section.component.html',
  styleUrls: ['./lazy-section.component.scss'],
})
export class LazySectionComponent implements AfterViewInit {

  visible = false
  hostClasses = ''

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    // Lấy class từ host
    this.hostClasses = this.el.nativeElement.className

    // Xóa class khỏi <app-lazy-section>
    this.renderer.setAttribute(this.el.nativeElement, 'class', '')

    // 👉 báo Angular chạy lại change detection
    this.cdr.detectChanges()
  }

  onVisible(event: boolean) {
    if (event) {
      this.visible = true
    }
  }
}
