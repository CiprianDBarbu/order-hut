import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Waiter } from '../shared/models/waiter.model';
import { WaiterService } from '../shared/services/waiter.service';

@Component({
  selector: 'app-waiter-detail',
  templateUrl: './waiter-detail.component.html',
  styleUrls: ['./waiter-detail.component.scss']
})
export class WaiterDetailComponent implements OnInit {
  waiter!: Waiter;

  constructor(protected activatedRouter: ActivatedRoute, protected waiterService: WaiterService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['waiterId'];

    this.waiterService.find(id).subscribe((res) => this.waiter = res);
  }

  back() {
    window.history.back();
  }
}
