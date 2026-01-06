import { Injectable } from '@angular/core'
import { environment } from '@env/environment'
import { Observable } from 'rxjs'
import { PATH } from 'src/app/shared/models/constants/path'
import { HttpOptions, HttpResponse } from 'src/app/shared/models/interface/request.base.dto'
import { HttpClientService } from 'src/app/shared/services/httpclient.service'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClientService: HttpClientService) {}

  getProduct(params?: any): Observable<HttpResponse<any>> {
    console.log('here')

    const option: HttpOptions = {
      url: environment.apiUrl,
      path: PATH.USER.COLOR.GET + '/users/login',
      params
    }
    return this.httpClientService.get(option)
  }
}
