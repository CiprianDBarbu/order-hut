import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../shared/models/client.model';
import { ClientService } from '../shared/services/client.service';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  clientForm = this.fb.group({
    clientId:[0],
    clientName: [""],
  });

  constructor(protected activatedRouter: ActivatedRoute, protected clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['clientId'];

    this.clientService.find(id).subscribe((res) => this.updateForm(res));
  }

  updateForm(client: Client): void {
    this.clientForm.patchValue({
      clientId: client.clientId,
      clientName: client.clientName,
    });
  }

  previousState() {
    window.history.back();
  }

  onSubmit(): void {
    this.clientService.formData = this.createFromForm();
    this.clientService.update().subscribe(() => this.previousState());
  }

  createFromForm(): Client {
    return {
      ...new Client(),
      clientId: this.clientForm.get(['clientId'])!.value,
      clientName: this.clientForm.get(['clientName'])!.value,
    };
  }
}
