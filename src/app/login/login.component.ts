import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user.model';
import { Buffer } from 'buffer';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: User = new User();

  loginForm = this.fb.group({
    userName: [''],
    password: [''],
  });

  constructor(private router: Router, private fb: FormBuilder, protected userService: UserService) {}

  ngOnInit(): void {
    // sessionStorage.setItem('token', '');
    sessionStorage.removeItem('token');
  }

  login(): void {
    this.userService.formData = this.createFromForm();

    this.userService.login().subscribe((res) => {
      let token = res.token;
      sessionStorage.setItem('token', token);
      this.router.navigateByUrl('/');
    });
  }

  createFromForm(): User {
    return {
      ...new User(),
      userName: this.loginForm.get(['userName'])!.value,
      password: this.loginForm.get(['password'])!.value,
    }
  }
}
