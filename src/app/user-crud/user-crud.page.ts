import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromEducationActions from '@confitec-store/education/actions/education.actions';
import { selectAllEducations } from '@confitec-core/store/education/selectors/education.selector';
import { selectAllUsers } from '@confitec-core/store/user/selectors/user.selector';


@Component({
  selector: 'confitec-user-crud',
  templateUrl: './user-crud.page.html',
  styleUrls: ['./user-crud.page.scss'],
})
export class UserCrudPage implements OnInit {

  educationsList$ = this.store.select(selectAllEducations);
  selectAllUsers$ = this.store.select(selectAllUsers);

  constructor(private router: Router, private store: Store) {
    this.loadEducations();
  }

  ngOnInit() {
  }

  loadEducations() {
    this.store.dispatch(fromEducationActions.GetAllEducationAction());
  }

  redirectToRegisterUser() {
    this.router.navigate(['user-crud/new']);
  }

}
