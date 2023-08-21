import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planification } from '../shared/models/planification.model';
import { PlanificationService } from '../shared/services/planification.service';

@Component({
  selector: 'app-planification-detail',
  templateUrl: './planification-detail.component.html',
  styleUrls: ['./planification-detail.component.scss']
})
export class PlanificationDetailComponent implements OnInit {
  planification!: Planification;
  isAdmin?: boolean = true;

  constructor(protected activatedRouter: ActivatedRoute, protected planificationService: PlanificationService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['planificationId'];
    this.isAdmin = sessionStorage.getItem("token") === null ? false : true;

    this.planificationService.find(id).subscribe((res) => this.planification = res);
  }

  back() {
    window.history.back();
  }
}
