import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss']
})
export class ClientDetailComponent implements OnInit {
  client!: Client;

  constructor(protected activatedRouter: ActivatedRoute, protected clientService: ClientService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['clientId'];

    this.clientService.find(id).subscribe((res) => this.client = res);
  }

  back() {
    window.history.back();
  }
}
