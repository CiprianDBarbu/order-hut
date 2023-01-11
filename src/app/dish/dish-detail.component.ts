import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../shared/models/dish.model';
import { DishService } from '../shared/services/dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  dish!: Dish;

  constructor(protected activatedRouter: ActivatedRoute, protected dishService: DishService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['dishId'];

    this.dish = this.dishService.find(id);
  }

  back() {
    window.history.back();
  }
}
