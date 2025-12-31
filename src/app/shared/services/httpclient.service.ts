import { GENERATE_OTP, REVOKE_TOKEN, URL_BASE, VERIFYOTP, GENERATE_TOKEN } from './constant';
import { Router } from '@angular/router';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStoreManagerService } from './local-store-manager.service';
import { LocalStoreEnum } from '../enum/local-store.enum';
import { UUID } from 'angular2-uuid';
import { HttpOptions } from '../models/interface/request.base.dto';
import { HttpErrorInterface, HttpInterface } from '../models/interface/response.base.dto';

export enum Verbs {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE'
}

export class HttpUrlEncodingCodec implements HttpParameterCodec {
  encodeKey(k: string): string {
    return standardEncoding(k);
  }

  encodeValue(v: string): string {
    return standardEncoding(v);
  }

  decodeKey(k: string): string {
    return decodeURIComponent(k);
  }

  decodeValue(v: string) {
    return decodeURIComponent(v);
  }
}

function standardEncoding(v: string): string {
  return encodeURIComponent(v);
}

@Injectable({ providedIn: 'root' })
export class HttpClientService {

  constructor(
    private http: HttpClient,
    private localStore: LocalStoreManagerService,
    private router: Router
  ) {
  }

  get<T>(options: HttpOptions): Observable<T> {

    if (options.params && typeof options.params === 'object') {
      for (let key in options.params) {
        if (options.params[key] === null) {
          delete options.params[key];
        }
      }
    }

    return this.httpCall(Verbs.GET, options);
  }

  delete<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Verbs.DELETE, options);
  }

  post<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Verbs.POST, options);
  }

  put<T>(options: HttpOptions): Observable<T> {
    return this.httpCall(Verbs.PUT, options);
  }

  // TODO
  httpCall<T>(verb: Verbs, options: HttpOptions): Observable<T> {
    console.log('', 'httpCall');

    const token = this.localStore.getData(LocalStoreEnum.Token_Jwt);
    const userName = this.localStore.getData(LocalStoreEnum.USER_NAME);

    const headers: Record<string, string> = {
      clientMessageId: UUID.UUID(),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    if (userName) {
      headers['userName'] = userName;
    }

    return this.http.request<T>(verb, `${options.url ?? URL_BASE}/${options.path}`, {
      body: options.body,
      headers: headers,
      params: options.params
    });
  }

  download(verb: Verbs, options: HttpOptions) {
    // if (this.tokenValid(options.path)) {
    //   this.navigateLogin();
    //   return of();
    // }
    const token = this.localStore.getData(LocalStoreEnum.Token_Jwt);
    const userName = this.localStore.getData(LocalStoreEnum.USER_NAME);

    if (options.params) {
      for (let key in options.params) {
        if (options.params[key] === null) {
          delete options.params[key];
        }
      }
    }

    options.body = options.body ?? null;
    options.headers = options.headers ?? {};
    options.isAuthentication = options.isAuthentication ?? true;
    if (options.isAuthentication) {
      options.headers = {
        ...options.headers,
        clientMessageId: `${UUID.UUID()}`,
        Authorization: `Bearer ${token}`,
        userName,
      };
    }
    return this.http.request(verb, `${options.url}/${options.path}`, {
      headers: options.headers,
      observe: 'response',
      responseType: 'blob',
      params: options.params ?? null
    });
  }

  upload(options: HttpOptions) {
    if (this.tokenValid(options.path)) {
      this.navigateLogin();
      return of();
    }
    const token = this.localStore.getData(LocalStoreEnum.Token_Jwt);
    options.body = options.body ?? null;
    options.headers = options.headers ?? {};
    options.isAuthentication = options.isAuthentication ?? true;
    if (options.isAuthentication) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`
      };
    }
    return this.http.post<any>(`${options.url}/${options.path}`, options.body, {
      headers: options.headers,
      observe: 'response',
      params: options.params ?? null
    });
  }

  tokenValid(url: string | undefined): boolean {
    const token = this.localStore.getData(LocalStoreEnum.Token_Jwt);
    return !token && url != GENERATE_TOKEN && url != REVOKE_TOKEN && url != VERIFYOTP && url != GENERATE_OTP;
  }

  navigateLogin() {
    this.router.navigate(['/auth/login']);
  }
}

export declare interface NgOnHttp {
  onSuccess(response: HttpInterface<any>): void;

  onError(error: HttpErrorInterface): void;
}


