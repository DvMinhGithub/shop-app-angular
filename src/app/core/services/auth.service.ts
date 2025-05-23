import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../../environments/environment'
import { IUser } from 'src/app/shared/models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>
  public currentUser: Observable<any>

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue() {
    return this.currentUserSubject.value
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, { username, password }).pipe(
      map((user: IUser) => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user)
        return user
      })
    )
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }

  register(user: any) {
    return this.http.post(`${environment.apiUrl}/auth/register`, user)
  }
}
