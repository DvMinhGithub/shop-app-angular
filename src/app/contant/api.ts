import { HttpHeaders } from '@angular/common/http';

export const Url = 'http://localhost:8080/api/v1';

export const headersApi = (refreshToken?: string): HttpHeaders => {
  let headers = new HttpHeaders();

  headers = headers.set('Content-Type', 'application/json');

  const accessToken = localStorage.getItem('accessToken');
  const tokenToUse = refreshToken || accessToken;

  if (tokenToUse) {
    headers = headers.set('Authorization', `Bearer ${tokenToUse}`);
  }

  return headers;
};
export const userApi = {
  register: `${Url}/users/register`,
  login: `${Url}/users/login`,
};
