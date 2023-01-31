import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

import {TableModule} from 'primeng/table';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientsList!: Client[];
  isAdmin?: boolean = true;

  constructor(private clientService: ClientService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.clientService.query().subscribe((res) => this.clientsList = res);
  }

  delete(client: Client) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      accept: () => {
        this.clientService.delete(client.clientId!);
      }
    });
  }
}
