import { Component, OnInit } from '@angular/core';
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

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishList = this.dishService.getDishesList();
  }

  delete(dish: Dish) {
    //delete the Dish
  }
}
