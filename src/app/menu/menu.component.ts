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
  sections!: string[];
  menu: Map<string, Dish[]> = new Map<string, Dish[]>();

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.dishService.query().subscribe((res) => {
      this.dishList = res;
      this.sections = [...new Set(res.map(el => el.category || ""))].filter(el => el !== "RĂCORITOARE");
      this.sections.push("RĂCORITOARE");
      this.initializeMenu();
    });
  }

  initializeMenu(): void {
    this.sections.forEach(el => {
      const items = this.dishList.filter(dish => dish.category == el);
      this.menu.set(el, items);
    });
  }
}
