import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName!: string;

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit(): void {
    const token = sessionStorage.getItem("token")!;
    // console.log(atob(token.split('.')[1]));
    console.log(JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()));
    this.userName = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).username;
  }

  logout() : void {
    sessionStorage.setItem('token', '');
  }
  
}
