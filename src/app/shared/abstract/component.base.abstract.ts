import { AfterViewInit, Directive, Injector, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Subject, takeUntil } from 'rxjs'
import { ToastService } from '../services/toast.service'
import { LoadingService } from '../services/loading.service'

@Directive()
export abstract class ComponentBaseAbstract implements OnInit, AfterViewInit, OnDestroy {
  protected readonly ngUnsubscribe = new Subject<void>()

  protected route!: ActivatedRoute
  protected router!: Router
  protected toastService!: ToastService
  protected loadingService!: LoadingService

  protected queryParams!: Params

  constructor(protected injector: Injector) {
    this.route = injector.get(ActivatedRoute)
    this.router = injector.get(Router)
    this.toastService = injector.get(ToastService)
    this.loadingService = injector.get(LoadingService)
  }

  ngOnInit(): void {
    this.initData()
  }

  protected initData(): void {
    this.route.queryParams.pipe(takeUntil(this.ngUnsubscribe)).subscribe({
      next: (queryParams: Params) => {
        try {
          this.queryParams = queryParams
          this.componentInit()
        } catch (e) {
          this.goTo404()
        }
      }
    })
  }

  /**
   * BẮT BUỘC thằng con phải implement
   */
  protected abstract componentInit(): void

  ngAfterViewInit(): void {
    this.afterView()
  }

  protected afterView(): void {}

  protected destroyData(): void {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
    this.destroyData()
  }

  /* ===================== COMMON METHODS ===================== */

  protected goTo404(): void {
    this.router.navigate(['/404'])
  }
}
