import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Table } from '../shared/models/table.model';
import { TableService } from '../shared/services/table.service';

@Component({
  selector: 'app-table-update',
  templateUrl: './table-update.component.html',
  styleUrls: ['./table-update.component.scss']
})
export class TableUpdateComponent implements OnInit {

  tableForm = this.fb.group({
    tableId: [0],
    servingZone: [0],
    numberOfSeats: [0],
  });

  isAdd!: boolean;

  constructor(protected activatedRouter: ActivatedRoute, protected tableService: TableService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['tableId'];

    if(id) {
      this.tableService.find(id).subscribe((res) => this.updateForm(res));
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
  }

  updateForm(table: Table): void {
    this.tableForm.patchValue({
      tableId: table.tableId,
      servingZone: table.servingZone,
      numberOfSeats: table.numberOfSeats,
    });
  }

  previousState() {
    window.history.back();
  }

  onSubmit(): void {
    this.tableService.formData = this.createFromForm();
    if(!this.isAdd) {
      this.tableService.update().subscribe(() => this.previousState());
    } else {
      this.tableService.create().subscribe(() => this.previousState());
    }
  }

  createFromForm(): Table {
    return {
      ...new Table(),
      tableId: this.tableForm.get(['tableId'])!.value !==0 ? this.tableForm.get(['tableId'])!.value : undefined,
      servingZone: this.tableForm.get(['servingZone'])!.value,
      numberOfSeats: this.tableForm.get(['numberOfSeats'])!.value,
    };
  }
}
