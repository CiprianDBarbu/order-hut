import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Dish } from '../shared/models/dish.model';
import { DishService } from '../shared/services/dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  dishList!: Dish[];
  isAdmin?: boolean = true;

  constructor(private dishService: DishService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.dishService.query().subscribe((res) => this.dishList = res);
  }

  delete(dish: Dish): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      accept: () => {
        this.dishService.delete(dish.dishId!).subscribe();
        location.reload();
      }
    });
  }
}
