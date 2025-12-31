import { Injectable } from '@angular/core';
import { HttpOptions } from 'src/app/shared/models/interface/request.base.dto';
import { HttpClientService } from 'src/app/shared/services/httpclient.service';
import {environment} from "@env/environment";
import { PATH } from 'src/app/shared/models/constants/path';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private httpClientService: HttpClientService

  ) { }

  getColor(params: any): Observable<HttpResponse<any>> {
    console.log('here');
    
    const option: HttpOptions = {
      url: environment.apiUrl,
      path: PATH.USER.COLOR.GET + '/users/login',
      params
    }
    return this.httpClientService.get(option);
  }


}
