import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User = new User();
  readonly baseURL = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }

  login(): Observable<any> {
    return this.http.post<any>(`${this.baseURL}/login`, this.formData);
  }

  find(id: number): Observable<User> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<User>(`${this.baseURL}/${id}`, { headers: headers });
  }
}
