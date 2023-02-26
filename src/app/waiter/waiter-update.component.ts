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

  constructor(protected activatedRouter: ActivatedRoute, protected waiterService: WaiterService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['waiterId'];

    this.waiterService.find(id).subscribe((res) => this.updateForm(res));
  }

  updateForm(waiter: Waiter): void {
    this.waiterForm.patchValue({
      waiterId: waiter.waiterId,
      fullName: waiter.fullName,
    });
  }

  previousState() {
    window.history.back();
  }

  onSubmit(): void {
    this.waiterService.formData = this.createFromForm();
    this.waiterService.update().subscribe(() => this.previousState());
  }

  createFromForm(): Waiter {
    return {
      ...new Waiter(),
      waiterId: this.waiterForm.get(['waiterId'])!.value,
      fullName: this.waiterForm.get(['fullName'])!.value,
    };
  }
}
