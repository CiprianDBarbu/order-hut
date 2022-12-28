import { Component, OnInit } from '@angular/core';
import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientsList?: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientsList = this.clientService.getClientsList();
  }
}
