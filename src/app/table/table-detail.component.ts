import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Table } from '../shared/models/table.model';
import { TableService } from '../shared/services/table.service';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.scss']
})
export class TableDetailComponent implements OnInit {
  table!: Table;

  constructor(protected activatedRouter: ActivatedRoute, protected tableService: TableService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['tableId'];

    this.tableService.find(id).subscribe((res) => this.table = res);
  }

  back() {
    window.history.back();
  }
}
