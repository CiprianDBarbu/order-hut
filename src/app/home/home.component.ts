import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { Buffer } from 'buffer';
import { Dish } from '../shared/models/dish.model';
import { DishService } from '../shared/services/dish.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName!: string;
  dishList!: Dish[];

  //variables used for Google Maps initialisation
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 44.411723,
      lng: 26.113901
  };
  zoom = 16;

  constructor(private http: HttpClient, private userService: UserService, private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.query().subscribe((res) => {
      //on the presentation we want only the first 7 elements from the menu
      this.dishList = res.slice(0, 6);
    });

    const token = sessionStorage.getItem("token")!;
    if(token) {
      this.userName = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).username;
    }
  }

  logout() : void {
    sessionStorage.setItem('token', '');
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
  
}
