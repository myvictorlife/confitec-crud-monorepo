import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'confitec-user-crud',
  templateUrl: './user-crud.page.html',
  styleUrls: ['./user-crud.page.scss'],
})
export class UserCrudPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToRegisterUser() {
    this.router.navigate(['user-crud/new']);
  }

}
