import { HttpClient } from '@angular/common/http';
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
    return this.http.post<Dish>(`${this.baseURL}/new`, this.formData);
  }

  update(): Observable<Dish> {
    return this.http.put<Dish>(`${this.baseURL}/${this.formData.dishId}`, this.formData);
  }

  query(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.baseURL}/list`);
  }

  find(id: number): Observable<Dish> {
    return this.http.get<Dish>(`${this.baseURL}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
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
