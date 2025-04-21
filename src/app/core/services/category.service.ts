import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { categoryApi } from 'src/app/constant/api'
import { ICategory } from 'src/app/shared/models/category'
import { IApiResponse } from 'src/app/shared/models/response'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<IApiResponse<ICategory[]>> {
    return this.http.get<IApiResponse<ICategory[]>>(categoryApi.getCategories)
  }
}
