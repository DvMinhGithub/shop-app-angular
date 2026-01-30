import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { categoryApi } from 'src/app/constants/api'
import { ICategory } from '@shared/models/category'
import { IApiResponse } from '@shared/models/response'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<IApiResponse<ICategory[]>> {
    return this.http.get<IApiResponse<ICategory[]>>(categoryApi.getCategories)
  }
}
