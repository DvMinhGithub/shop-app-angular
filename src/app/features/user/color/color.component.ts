import { Component, OnInit } from '@angular/core';
import { MessageSeverity, ToastService } from 'src/app/shared/services/toast.service';
import { ColorService } from './service/color.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { LoadingService } from 'src/app/shared/services/loading.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  public ngUnsubscribe = new Subject();

  constructor(
    private toastService: ToastService,
    private loadingService: LoadingService,
    private colorService: ColorService
  ) { }

  ngOnInit(): void {
    // test thông báo khi call api nên để tạm
    this.toastService.showToastr(
      'Chào bạn đến với danh mục màu sắc',
      'Thông báo',
      MessageSeverity.success
    );

    this.getColor()
  }

  getColor() {

    this.loadingService.show()
    this.colorService.getColor('params').pipe(
      finalize(() => { this.loadingService.hide() }),
      takeUntil(this.ngUnsubscribe),
    ).subscribe({
      next: (res) => {
        console.log('SUCCESS', res);
      },
      error: (err) => {
        // console.error('ERROR', err);
      }
    }
    )
  }
}
