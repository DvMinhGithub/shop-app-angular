import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routes'
import { FooterComponent } from './layouts/footer/footer.component'
import { HeaderComponent } from './layouts/header/header.component'
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component'
import { SharedModule } from './shared/share.module'

@NgModule({
  declarations: [AppComponent, MainLayoutComponent, HeaderComponent, FooterComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
