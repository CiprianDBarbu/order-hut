import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Planification } from '../shared/models/planification.model';
import { Table } from '../shared/models/table.model';
import { Waiter } from '../shared/models/waiter.model';
import { PlanificationService } from '../shared/services/planification.service';
import { TableService } from '../shared/services/table.service';
import { WaiterService } from '../shared/services/waiter.service';

@Component({
  selector: 'app-planification-update',
  templateUrl: './planification-update.component.html',
  styleUrls: ['./planification-update.component.scss']
})
export class PlanificationUpdateComponent implements OnInit {

  planificationForm = this.fb.group({
    planificationId: [0],
    waiter: new Waiter(),
    actualTable: new Table(),
  });

  waiters!: Waiter[];
  tables!: Table[];
  isAdd!: boolean;
  isAdmin?: boolean = true;


  constructor(protected activatedRouter: ActivatedRoute, protected planificationService: PlanificationService, protected waiterService: WaiterService, protected tableService: TableService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['planificationId'];
    this.isAdmin = sessionStorage.getItem("token") === null ? false : true;

    if(id) {
      this.planificationService.find(id).subscribe((res) => this.updateForm(res));
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }

    this.updateWaiters();
    this.updateTables();
  }

  updateForm(planification: Planification): void {
    this.planificationForm.patchValue({
      planificationId: planification.planificationId,
      waiter: planification.waiter,
      actualTable: planification.actualTable,
    });
  }

  previousState() {
    window.history.back();
    this.planificationService.formData = new Planification();
  }

  onSubmit(): void {
    this.planificationService.formData = this.createFromForm();
    if(!this.isAdd) {
      this.planificationService.update().subscribe(() => this.previousState());
    } else {
      this.planificationService.create().subscribe(() => this.previousState());
    }
  }

  createFromForm(): Planification {
    return {
      ...new Planification(),
      planificationId: this.planificationForm.get(['planificationId'])!.value !==0 ? this.planificationForm.get(['planificationId'])!.value : undefined,
      waiter: this.planificationForm.get(['waiter'])!.value,
      actualTable: this.planificationForm.get(['actualTable'])!.value,
    };
  }

  updateWaiters(): void {
    this.waiterService.query().subscribe((res) => {this.waiters = res});
  }

  updateTables(): void {
    this.tableService.query().subscribe((res) => {this.tables = res});
  }

}
