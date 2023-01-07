import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientsList!: Client[];
  isAdmin?: boolean = true;

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientsList = this.clientService.getClientsList();
  }

  delete(client: Client) {
    //delete Client
  }
}
