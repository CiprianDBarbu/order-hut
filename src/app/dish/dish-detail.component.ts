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
  isAdmin?: boolean = true;

  constructor(protected activatedRouter: ActivatedRoute, protected dishService: DishService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['dishId'];
    this.isAdmin = sessionStorage.getItem("token") === null ? false : true;

    this.dishService.find(id).subscribe((res) => this.dish = res);
  }

  back() {
    window.history.back();
  }
}
