import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planification } from '../models/planification.model';

@Injectable({
  providedIn: 'root'
})
export class PlanificationService {

  formData: Planification = new Planification();
  readonly baseURL = 'http://localhost:8080/planification';

  constructor(private http: HttpClient) { }

  create(): Observable<Planification> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.post<Planification>(`${this.baseURL}/new`, this.formData, { headers: headers });
  }

  update(): Observable<Planification> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.put<Planification>(`${this.baseURL}/${this.formData.planificationId}`, this.formData, { headers: headers });
  }

  query(): Observable<Planification[]> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Planification[]>(`${this.baseURL}/list`, { headers: headers });
  }

  find(id: number): Observable<Planification> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Planification>(`${this.baseURL}/${id}`, { headers: headers });
  }

  delete(id: number): Observable<any> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.delete(`${this.baseURL}/${id}`, { headers: headers });
  } 
}
