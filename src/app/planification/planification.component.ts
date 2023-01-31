import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Planification } from '../shared/models/planification.model';
import { PlanificationService } from '../shared/services/planification.service';

@Component({
  selector: 'app-planification',
  templateUrl: './planification.component.html',
  styleUrls: ['./planification.component.scss']
})
export class PlanificationComponent implements OnInit {
  planificationList!: Planification[];
  isAdmin?: boolean = true;

  constructor(private planificationService: PlanificationService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.planificationService.query().subscribe((res) => this.planificationList = res);
  }

  delete(planification: Planification) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      accept: () => {
        this.planificationService.delete(planification.planificationId!);
      }
    });
  }
}
