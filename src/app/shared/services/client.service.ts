import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  formData: Client = new Client();
  readonly baseURL = 'http://localhost:8080/client';

  constructor(private http: HttpClient) { }

  create(): Observable<Client> {
    const JWTToken = sessionStorage.getItem('token')!;
    let headers = new HttpHeaders();
    if(JWTToken) {
      headers = new HttpHeaders({
        'Authorization': `Bearer ${JWTToken}`,
        'Accept-Encoding': 'identity'
      });
    }
    return this.http.post<Client>(`${this.baseURL}/new`, this.formData, { headers: headers });
  }

  update(): Observable<Client> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`
    });
    return this.http.put<Client>(`${this.baseURL}/${this.formData.clientId}`, this.formData, { headers: headers });
  }

  query(): Observable<Client[]> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`
    });
    return this.http.get<Client[]>(`${this.baseURL}/list`, { headers: headers });
  }

  find(id: number): Observable<Client> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`
    });
    return this.http.get<Client>(`${this.baseURL}/${id}`, { headers: headers });
  }

  delete(id: number): Observable<any> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`
    });
    return this.http.delete(`${this.baseURL}/${id}`, { headers: headers });
  } 

  // getClientsList() {
  //   return [
  //     {
  //       clientId: 1,
  //       name: "Patrick Farmer",
  //       orderId: 2,
  //       orderTotalPrice: 39,
  //       tableId: 2,
  //     },
  //     {
  //       clientId: 2,
  //       name: "Plato Clay",
  //       orderId: 2,
  //       orderTotalPrice: 38,
  //       tableId: 1,
  //     },
  //     {
  //       clientId: 3,
  //       name: "Shellie Steele",
  //       orderId: 3,
  //       orderTotalPrice: 35,
  //       tableId: 1,
  //     },
  //     {
  //       clientId: 4,
  //       name: "Herrod Cote",
  //       orderId: 3,
  //       orderTotalPrice: 39,
  //       tableId: 3,
  //     },
  //     {
  //       clientId: 5,
  //       name: "Kimberley Conway",
  //       orderId: 4,
  //       orderTotalPrice: 22,
  //       tableId: 0,
  //     },
  //   ];
  // }
}
