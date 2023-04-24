import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Order Hut';

  visible!: boolean;

  showDialog() {
    this.visible = true;
}
}
