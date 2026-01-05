import { Component } from '@angular/core'
import { mockBrand, mockStats } from './models/constant'
import { BrandItem, StatsItem } from './models/interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  brandList: BrandItem[] = mockBrand
  statsList: StatsItem[] = mockStats
}
