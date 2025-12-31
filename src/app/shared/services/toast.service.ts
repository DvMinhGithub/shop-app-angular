import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private defaultConfig: Partial<IndividualConfig> = {
    positionClass: 'toast-top-right',
    timeOut: 2000,
    extendedTimeOut: 0,
    closeButton: true,
    progressBar: true,
  };

  constructor(private toastr: ToastrService) {}

  showToastr(
    message: string,
    title: string,
    severity: MessageSeverity,
    option?: Partial<IndividualConfig>
  ): void {
    const config = { ...this.defaultConfig, ...option };

    switch (severity) {
      case MessageSeverity.success:
        this.toastr.success(message, title, config);
        break;
      case MessageSeverity.warning:
        this.toastr.warning(message, title, config);
        break;
      case MessageSeverity.error:
        this.toastr.error(message, title, config);
        break;
      default:
        this.toastr.info(message, title, config);
        break;
    }
  }

  clear(): void {
    this.toastr.clear();
  }
}

export enum MessageSeverity {
  success = 'success',
  warning = 'warning',
  error = 'error',
  info = 'info',
}
