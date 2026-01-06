import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { IContactRequest } from 'src/app/shared/models/interface/request'
import { IApiResponse } from 'src/app/shared/models/interface/response'
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) {}

  contact(credentials: IContactRequest) {
    return this.http.post<IApiResponse<any>>('/api/contact', credentials)
  }
}
