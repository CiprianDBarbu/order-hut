import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  formData: Order = new Order();
  readonly baseURL = 'http://localhost:8080/order';

  constructor(private http: HttpClient) { }

  create(): Observable<Order> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.post<Order>(`${this.baseURL}/new`, this.formData, { headers: headers });
  }

  update(): Observable<Order> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.put<Order>(`${this.baseURL}/${this.formData.orderId}`, this.formData, { headers: headers });
  }

  query(): Observable<Order[]> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Order[]>(`${this.baseURL}/list`, { headers: headers });
  }

  find(id: number): Observable<Order> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.get<Order>(`${this.baseURL}/${id}`, { headers: headers });
  }

  delete(id: number): Observable<any> {
    const JWTToken = sessionStorage.getItem('token')!;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${JWTToken}`,
      'Accept-Encoding': 'identity'
    });
    return this.http.delete(`${this.baseURL}/${id}`, { headers: headers });
  }

  // getOrdersList() {
  //   return [
  //     {
  //       orderId: 1,
  //       dishList: [
  //         {
  //           dishId: 1,
  //           name: "Natalie Banks",
  //           price: 5,
  //           description: "et"
  //         },
  //         {
  //           dishId: 2,
  //           name: "Colin Herrera",
  //           price: 7,
  //           description: "Duis mi enim, condimentum eget,"
  //         },
  //         {
  //           dishId: 3,
  //           name: "Maryam Rodriquez",
  //           price: 3,
  //           description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
  //         },
  //         {
  //           dishId: 4,
  //           name: "Kyla Hurley",
  //           price: 7,
  //           description: "odio sagittis semper. Nam tempor"
  //         },
  //         {
  //           dishId: 5,
  //           name: "Chastity Downs",
  //           price: 10,
  //           description: "egestas a, dui. Cras pellentesque."
  //         }
  //       ],
  //       totalPrice: 14,
  //       clientId: 2,
  //       tableId: 3,
  //       orderTime: new Date("2022-03-09 20:46:29")
  //     },
  //     {
  //       orderId: 2,
  //       dishList: [
  //         {
  //           dishId: 1,
  //           name: "Natalie Banks",
  //           price: 5,
  //           description: "et"
  //         },
  //         {
  //           dishId: 2,
  //           name: "Colin Herrera",
  //           price: 7,
  //           description: "Duis mi enim, condimentum eget,"
  //         },
  //         {
  //           dishId: 3,
  //           name: "Maryam Rodriquez",
  //           price: 3,
  //           description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
  //         },
  //         {
  //           dishId: 4,
  //           name: "Kyla Hurley",
  //           price: 7,
  //           description: "odio sagittis semper. Nam tempor"
  //         },
  //         {
  //           dishId: 5,
  //           name: "Chastity Downs",
  //           price: 10,
  //           description: "egestas a, dui. Cras pellentesque."
  //         }
  //       ],
  //       totalPrice: 7,
  //       clientId: 4,
  //       tableId: 4,
  //       orderTime: new Date("2023-07-15 11:24:39")
  //     },
  //     {
  //       orderId: 3,
  //       dishList: [
  //         {
  //           dishId: 1,
  //           name: "Natalie Banks",
  //           price: 5,
  //           description: "et"
  //         },
  //         {
  //           dishId: 2,
  //           name: "Colin Herrera",
  //           price: 7,
  //           description: "Duis mi enim, condimentum eget,"
  //         },
  //         {
  //           dishId: 3,
  //           name: "Maryam Rodriquez",
  //           price: 3,
  //           description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
  //         },
  //         {
  //           dishId: 4,
  //           name: "Kyla Hurley",
  //           price: 7,
  //           description: "odio sagittis semper. Nam tempor"
  //         },
  //         {
  //           dishId: 5,
  //           name: "Chastity Downs",
  //           price: 10,
  //           description: "egestas a, dui. Cras pellentesque."
  //         }
  //       ],
  //       totalPrice: 25,
  //       clientId: 3,
  //       tableId: 1,
  //       orderTime: new Date("2023-02-07 12:13:57")
  //     },
  //     {
  //       orderId: 4,
  //       dishList: [
  //         {
  //           dishId: 1,
  //           name: "Natalie Banks",
  //           price: 5,
  //           description: "et"
  //         },
  //         {
  //           dishId: 2,
  //           name: "Colin Herrera",
  //           price: 7,
  //           description: "Duis mi enim, condimentum eget,"
  //         },
  //         {
  //           dishId: 3,
  //           name: "Maryam Rodriquez",
  //           price: 3,
  //           description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
  //         },
  //         {
  //           dishId: 4,
  //           name: "Kyla Hurley",
  //           price: 7,
  //           description: "odio sagittis semper. Nam tempor"
  //         },
  //         {
  //           dishId: 5,
  //           name: "Chastity Downs",
  //           price: 10,
  //           description: "egestas a, dui. Cras pellentesque."
  //         }
  //       ],
  //       totalPrice: 23,
  //       clientId: 3,
  //       tableId: 1,
  //       orderTime: new Date("2023-07-12 07:48:42")
  //     },
  //     {
  //       orderId: 5,
  //       dishList: [
  //         {
  //           dishId: 1,
  //           name: "Natalie Banks",
  //           price: 5,
  //           description: "et"
  //         },
  //         {
  //           dishId: 2,
  //           name: "Colin Herrera",
  //           price: 7,
  //           description: "Duis mi enim, condimentum eget,"
  //         },
  //         {
  //           dishId: 3,
  //           name: "Maryam Rodriquez",
  //           price: 3,
  //           description: "sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus"
  //         },
  //         {
  //           dishId: 4,
  //           name: "Kyla Hurley",
  //           price: 7,
  //           description: "odio sagittis semper. Nam tempor"
  //         },
  //         {
  //           dishId: 5,
  //           name: "Chastity Downs",
  //           price: 10,
  //           description: "egestas a, dui. Cras pellentesque."
  //         }
  //       ],
  //       totalPrice: 26,
  //       clientId: 4,
  //       tableId: 2,
  //       orderTime: new Date("2023-11-01 13:00:58")
  //     }
  //   ];
  // }
}
