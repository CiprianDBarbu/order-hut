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

  constructor(protected activatedRouter: ActivatedRoute, protected tableService: TableService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['tableId'];

    this.tableService.find(id).subscribe((res) => this.updateForm(res));
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
    this.tableService.update().subscribe(() => this.previousState());
  }

  createFromForm(): Table {
    return {
      ...new Table(),
      tableId: this.tableForm.get(['tableId'])!.value,
      servingZone: this.tableForm.get(['servingZone'])!.value,
      numberOfSeats: this.tableForm.get(['numberOfSeats'])!.value,
    };
  }
}
