import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  formData: Dish = new Dish();
  readonly baseURL = 'http://localhost:8080/dish';

  constructor(private http: HttpClient) { }

  create(): Observable<Dish> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.post<Dish>(`${this.baseURL}/new`, this.formData, { headers: headers });
  }

  update(): Observable<Dish> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.put<Dish>(`${this.baseURL}/${this.formData.dishId}`, this.formData, { headers: headers });
  }

  query(): Observable<Dish[]> {
    const JWTToken = sessionStorage.getItem('token')!;
    let headers = new HttpHeaders();
    if(JWTToken) {
      headers = new HttpHeaders({
        'Authorization': `Bearer ${JWTToken}`,
        'Accept-Encoding': 'identity'
      });
    }
    return this.http.get<Dish[]>(`${this.baseURL}/list`, { headers: headers });
  }

  find(id: number): Observable<Dish> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Dish>(`${this.baseURL}/${id}`, { headers: headers });
  }

  delete(id: number): Observable<any> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.delete(`${this.baseURL}/${id}`, { headers: headers });
  }

  // getDishesList() {
  //   return [
  //     {
  //       dishId: 1,
  //       name: "Natalie Banks",
  //       price: 5,
  //       description: "et"
  //     },
  //     {
  //       dishId: 2,
  //       name: "Colin Herrera",
  //       price: 7,
  //       description: "Duis mi enim, condimentum eget,"
  //     },
  //     {
  //       dishId: 3,
  //       name: "Maryam Rodriquez",
  //       price: 3,
  //       description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
  //     },
  //     {
  //       dishId: 4,
  //       name: "Kyla Hurley",
  //       price: 7,
  //       description: "odio sagittis semper. Nam tempor"
  //     },
  //     {
  //       dishId: 5,
  //       name: "Chastity Downs",
  //       price: 10,
  //       description: "egestas a, dui. Cras pellentesque."
  //     }
  //   ];
  // }
}
