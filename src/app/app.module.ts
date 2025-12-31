import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { LayoutsModule } from './layouts/layouts.module'
import { TokenInterceptor } from './core/interceptors/token.interceptor'
import { LoadingModule } from './shared/ui/loading/loading.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    LayoutsModule,
    AppRoutingModule,
    LoadingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true  // Chạy nhiều interceptors cùng lúc
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
