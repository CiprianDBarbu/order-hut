import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Waiter } from '../shared/models/waiter.model';
import { WaiterService } from '../shared/services/waiter.service';

@Component({
  selector: 'app-waiter-update',
  templateUrl: './waiter-update.component.html',
  styleUrls: ['./waiter-update.component.scss']
})
export class WaiterUpdateComponent implements OnInit {

  waiterForm = this.fb.group({
    waiterId: [0],
    fullName: [''],
  });

  isAdd!: boolean;

  constructor(protected activatedRouter: ActivatedRoute, protected waiterService: WaiterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['waiterId'];

    if(id) {
      this.waiterService.find(id).subscribe((res) => this.updateForm(res));
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
  }

  updateForm(waiter: Waiter): void {
    this.waiterForm.patchValue({
      waiterId: waiter.waiterId,
      fullName: waiter.fullName,
    });
  }

  previousState() {
    window.history.back();
    this.waiterService.formData = new Waiter();
  }

  onSubmit(): void {
    this.waiterService.formData = this.createFromForm();
    if(!this.isAdd) {
      this.waiterService.update().subscribe(() => this.previousState());
    } else {
      this.waiterService.create().subscribe(() => this.previousState());
    }
  }

  createFromForm(): Waiter {
    return {
      ...new Waiter(),
      waiterId: this.waiterForm.get(['waiterId'])!.value !==0 ? this.waiterForm.get(['waiterId'])!.value : undefined,
      fullName: this.waiterForm.get(['fullName'])!.value,
    };
  }
}
