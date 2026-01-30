import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { roleApi } from 'src/app/constants/api'
import { IApiResponse } from '@shared/models/response'
import { IRole } from '@shared/models/role'

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private http: HttpClient) {}

  getRoles(): Observable<IApiResponse<IRole[]>> {
    return this.http.get<IApiResponse<IRole[]>>(roleApi.getRoles)
  }
}
