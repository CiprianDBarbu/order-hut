import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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

  constructor(private waiterService: WaiterService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.waiterService.query().subscribe((res) => this.waitersList = res);
  }

  delete(waiter: Waiter) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      accept: () => {
        this.waiterService.delete(waiter.waiterId!);
      }
    });
  }
}
