import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
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

  constructor(private tableService: TableService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.tableService.query().subscribe((res) => this.tablesList = res);
  }

  delete(table: Table): any {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      accept: () => {
        this.tableService.delete(table.tableId!).subscribe();
        location.reload();
      }
    });
  }
}
