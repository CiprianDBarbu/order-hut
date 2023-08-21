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

  isAdd!: boolean;
  isAdmin?: boolean = true;

  constructor(protected activatedRouter: ActivatedRoute, protected clientService: ClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['clientId'];
    this.isAdmin = sessionStorage.getItem("token") === null ? false : true;

    if(id) {
      this.clientService.find(id).subscribe((res) => this.updateForm(res));
      this.isAdd = false;
    } else {
      this.isAdd = true;
    }
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
    if(!this.isAdd) {
      this.clientService.update().subscribe(() => this.previousState());
    } else {
      this.clientService.create().subscribe(() => this.previousState());
    }
  }

  createFromForm(): Client {
    return {
      ...new Client(),
      clientId: this.clientForm.get(['clientId'])!.value !==0 ? this.clientForm.get(['clientId'])!.value : undefined,
      clientName: this.clientForm.get(['clientName'])!.value,
    };
  }
}
