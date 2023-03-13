import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/models/dish.model';
import { DishService } from '../shared/services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishList!: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.query().subscribe(res => this.dishList = res);
  }
}
