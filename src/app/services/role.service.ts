import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { roleApi } from '../contant/api'
import { IApiResponse } from '../types/response'
import { IRole } from '../types/role'


@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<IApiResponse<IRole[]>> {
    return this.http.get<IApiResponse<any>>(roleApi.getRoles);
  }
}
