import { HttpClient } from '@angular/common/http';
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
    return this.http.post<Planification>(`${this.baseURL}/new`, this.formData);
  }

  update(): Observable<Planification> {
    return this.http.put<Planification>(`${this.baseURL}/${this.formData.planificationId}`, this.formData);
  }

  query(): Observable<Planification[]> {
    return this.http.get<Planification[]>(`${this.baseURL}/list`);
  }

  find(id: number): Observable<Planification> {
    return this.http.get<Planification>(`${this.baseURL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  } 
}
