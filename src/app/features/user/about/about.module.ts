import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AboutRoutingModule } from './about-routing.module'
import { AboutComponent } from './about.component'
import { CtaColorsComponent } from './cta-colors/cta-colors.component'
import { HeroBannerComponent } from './hero-banner/hero-banner.component'
import { JourneyCtaComponent } from './journey-cta/journey-cta.component'
import { TeamComponent } from './team/team.component'
import { SharedModule } from 'src/app/shared/share.module'

@NgModule({
  declarations: [HeroBannerComponent, TeamComponent, CtaColorsComponent, AboutComponent, JourneyCtaComponent],
  imports: [CommonModule, AboutRoutingModule, SharedModule]
})
export class AboutModule { }
