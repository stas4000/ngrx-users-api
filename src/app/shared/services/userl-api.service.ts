import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiUrlService {
  constructor(private http: HttpClient) { }

  userApiUrl = "https://reqres.in/api/users?page=2";

  userApi() {
    return this.http.get(this.userApiUrl);
  }
}
