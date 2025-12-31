import { Component } from '@angular/core'
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss'],
})
export class Loading {
  constructor(public loadingService: LoadingService) { }
}
