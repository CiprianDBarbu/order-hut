import { HttpClient } from '@angular/common/http';
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
    return this.http.post<Waiter>(`${this.baseURL}/new`, this.formData);
  }

  update(): Observable<Waiter> {
    return this.http.put<Waiter>(`${this.baseURL}/${this.formData.waiterId}`, this.formData);
  }

  query(): Observable<Waiter[]> {
    return this.http.get<Waiter[]>(`${this.baseURL}/list`);
  }

  find(id: number): Observable<Waiter> {
    return this.http.get<Waiter>(`${this.baseURL}/${id}`);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
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
