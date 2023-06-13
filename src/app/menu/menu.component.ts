import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/models/dish.model';
import { DishService } from '../shared/services/dish.service';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../store/shopping.actions';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit {

  dishList!: Dish[];
  sections!: string[];
  menu: Map<string, Dish[]> = new Map<string, Dish[]>();
  isVisible!: boolean;
  selectedDish: Dish = new Dish();

  constructor(private dishService: DishService, private store: Store<AppState>, private messageService: MessageService) { }

  ngOnInit(): void {
    this.dishService.query().subscribe((res) => {
      this.dishList = res;
      this.sections = [...new Set(res.map(el => el.category || ""))].filter(el => el !== "RACORITOARE");
      this.sections.push("RACORITOARE");
      this.initializeMenu();
    });
  }

  initializeMenu(): void {
    this.sections.forEach(el => {
      const items = this.dishList.filter(dish => dish.category == el);
      this.menu.set(el, items);
    });
  }

  showDialog(dish: Dish) {
    this.isVisible = true;
    this.selectedDish = dish;
  }

  addToCart(event: Event) {
    this.messageService.add({ severity: 'success', summary: 'Added to cart', detail: `${this.selectedDish.dishName} added to cart!` });
    this.isVisible = false;

    this.store.dispatch(new AddItemAction(this.selectedDish));
  }
}
