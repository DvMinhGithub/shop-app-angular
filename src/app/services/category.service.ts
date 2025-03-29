import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { categoryApi } from '../contant/api'
import { ICategory } from '../types/category'
import { IApiResponse } from '../types/response'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

    getCategories(): Observable<IApiResponse<ICategory[]>> {
        return this.http.get<IApiResponse<ICategory[]>>(categoryApi.getCategories)
    }
}
