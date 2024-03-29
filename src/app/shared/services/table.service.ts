import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../models/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  formData: Table = new Table();
  readonly baseURL = 'http://localhost:8080/table';

  constructor(private http: HttpClient) { }

  create(): Observable<Table> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.post<Table>(`${this.baseURL}/new`, this.formData, { headers: headers });
  }

  update(): Observable<Table> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.put<Table>(`${this.baseURL}/${this.formData.tableId}`, this.formData, { headers: headers });
  }

  query(): Observable<Table[]> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Table[]>(`${this.baseURL}/list`, { headers: headers });
  }

  find(id: number): Observable<Table> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Table>(`${this.baseURL}/${id}`, { headers: headers });
  }

  delete(id: number): Observable<any> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.delete(`${this.baseURL}/${id}`, { headers: headers });
  }

  // getTablesList() {
  //   return [
  //     {
  //       tableId: 1,
  //       clientId: 3,
  //       waiterId: 2,
  //       orderId: 9
  //     },
  //     {
  //       tableId: 2,
  //       clientId: 3,
  //       waiterId: 4,
  //       orderId: 5
  //     },
  //     {
  //       tableId: 3,
  //       clientId: 1,
  //       waiterId: 1,
  //       orderId: 7
  //     },
  //     {
  //       tableId: 4,
  //       clientId: 0,
  //       waiterId: 3,
  //       orderId: 3
  //     },
  //     {
  //       tableId: 5,
  //       clientId: 3,
  //       waiterId: 5,
  //       orderId: 7
  //     }
  //   ];
  // }
}
