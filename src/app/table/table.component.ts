import { Component, OnInit } from '@angular/core';
import { Table } from '../shared/models/table.model';
import { TableService } from '../shared/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  tablesList!: Table[];
  isAdmin?: boolean = true;

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tablesList = this.tableService.getTablesList();
  }

  delete(table: Table) {
    //delete the Table
  }
}
