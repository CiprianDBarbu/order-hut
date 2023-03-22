import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.post<Client>(`${this.baseURL}/new`, this.formData);
  }

  update(): Observable<Client> {
    return this.http.put<Client>(`${this.baseURL}/${this.formData.clientId}`, this.formData);
  }

  query(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseURL}/list`);
  }

  find(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.baseURL}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
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
