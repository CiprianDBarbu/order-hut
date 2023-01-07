import { Component, OnInit } from '@angular/core';
import { Waiter } from '../shared/models/waiter.model';
import { WaiterService } from '../shared/services/waiter.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {
  waitersList!: Waiter[];
  isAdmin?: boolean = true;

  constructor(private waiterService: WaiterService) { }

  ngOnInit(): void {
    this.waitersList = this.waiterService.getWaitersList();
  }

  delete(waiter: Waiter) {
    //delete the Waiter
  }
}
