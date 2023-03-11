import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../shared/services/dish.service';
import { Dish } from '../shared/models/dish.model';
@Component({
  selector: 'app-dish-update',
  templateUrl: './dish-update.component.html',
  styleUrls: ['./dish-update.component.scss']
})
export class DishUpdateComponent implements OnInit {
  
  dishForm = this.fb.group({
    dishId: [0],
    dishName: [''],
    price: [0],
    category: [''],
    imageUrl: [''],
    dishDescription: [''],
  });

  isAdd!: boolean;

  constructor(protected activatedRouter: ActivatedRoute, protected dishService: DishService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['dishId'];

    if(id) {
      this.dishService.find(id).subscribe((res) => this.updateForm(res));
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
  }

  updateForm(dish: Dish): void {
    this.dishForm.patchValue({
      dishId: dish.dishId,
      dishName: dish.dishName,
      price: dish.price,
      category: dish.category,
      imageUrl: dish.imageUrl,
      dishDescription: dish.dishDescription,
    });
  }

  previousState() {
    window.history.back();
  }

  onSubmit(): void {
    this.dishService.formData = this.createFromForm();
    if(!this.isAdd) {
      this.dishService.update().subscribe(() => this.previousState());
    } else {
      this.dishService.create().subscribe(() => this.previousState());
    }
  }

  createFromForm(): Dish {
    return {
      ...new Dish(),
      dishId: this.dishForm.get(['dishId'])!.value !==0 ? this.dishForm.get(['dishId'])!.value : undefined,
      dishName: this.dishForm.get(['dishName'])!.value,
      price: this.dishForm.get(['price'])!.value,
      category: this.dishForm.get(['category'])!.value,
      imageUrl: this.dishForm.get(['imageUrl'])!.value,
      dishDescription: this.dishForm.get(['dishDescription'])!.value,
    };
  }
}
