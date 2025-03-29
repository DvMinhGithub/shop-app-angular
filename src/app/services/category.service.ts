import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { categoryApi, productApi } from '../contant/api'
import { IApiResponse } from '../types/response'
import { IPagination } from '../types/request'
import { IProductListResponse } from '../types/product'
import { ICategory } from '../types/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

    getCategories(): Observable<IApiResponse<ICategory[]>> {
        return this.http.get<IApiResponse<ICategory[]>>(categoryApi.getCategories)
    }
}
