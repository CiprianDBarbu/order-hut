import { Component, OnInit } from '@angular/core';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Order Hut';

  visible!: boolean;
  isAdmin?: boolean;
  isWaiter?: boolean;
  userName!: string;

  ngOnInit(): void {
    // this.isAdmin = sessionStorage.getItem("token") === null ? false : true;
    const token = sessionStorage.getItem("token")!;
    this.userName = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString()).username;
    this.isAdmin =  this.userName === "admin" ? true : false;
    this.isWaiter =  this.userName === "waiter" ? true : false;
  }

  showDialog() {
    this.visible = true;
  }
}
