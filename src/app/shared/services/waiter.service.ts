import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Waiter } from '../models/waiter.model';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  formData: Waiter = new Waiter();
  readonly baseURL = 'http://localhost:8080/waiter';

  constructor(private http: HttpClient) { }

  create(): Observable<Waiter> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.post<Waiter>(`${this.baseURL}/new`, this.formData, { headers: headers });
  }

  update(): Observable<Waiter> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.put<Waiter>(`${this.baseURL}/${this.formData.waiterId}`, this.formData, { headers: headers });
  }

  query(): Observable<Waiter[]> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Waiter[]>(`${this.baseURL}/list`, { headers: headers });
  }

  find(id: number): Observable<Waiter> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Waiter>(`${this.baseURL}/${id}`, { headers: headers });
  }

  delete(id: number): Observable<any> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.delete(`${this.baseURL}/${id}`, { headers: headers });
  }

  // getWaitersList() {
  //   return [
  //     {
  //       waiterId: 1,
  //       name: "Isabella Lindsay",
  //       tablesListIds: [6]
  //     },
  //     {
  //       waiterId: 2,
  //       name: "Fay Santos",
  //       tablesListIds: [5, 2, 7]
  //     },
  //     {
  //       waiterId: 3,
  //       name: "Keane Pace",
  //       tablesListIds: [1]
  //     },
  //     {
  //       waiterId: 4,
  //       name: "Clementine Lyons",
  //       tablesListIds: [3, 4]
  //     },
  //     {
  //       waiterId: 5,
  //       name: "Susan Anthony",
  //       tablesListIds: [8, 9, 10]
  //     }
  //   ];
  // }
}
