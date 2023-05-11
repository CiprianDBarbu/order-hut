import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Order Hut';

  visible!: boolean;
  isAdmin?: boolean = true;

  ngOnInit(): void {
    // this.isAdmin = sessionStorage.getItem("token") === null ? false : true;
  }

  showDialog() {
    this.visible = true;
  }
}
