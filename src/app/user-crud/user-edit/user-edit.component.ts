import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '@confitec-core/models/user.model';
import { Store } from '@ngrx/store';
import * as fromUserActions from '@confitec-store/user/actions/user.actions';
import { selectCurrentUser } from '@confitec-core/store/user/selectors/user.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'confitec-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit, OnDestroy {

  user$ = this.store.select(selectCurrentUser);
  userForm: FormGroup;

  constructor(private store: Store, public formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.validationRoute();
  }

  validationRoute() {
    this.user$.subscribe((user) => {
      if (!user) { this.redirectToUserListPage(); };
    });
  }

  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.userForm.get('dob').setValue(date, {
      onlyself: true
    });
  }

  redirectToUserListPage() {
    this.router.navigate(['user-crud']);
  }

  submitForm(user: User) {
    this.store.dispatch(fromUserActions.UpdateUser({user}));
  }

  ngOnDestroy() {
    this.store.dispatch(fromUserActions.setSelectedUserId({ selectedUserId: null }));
  }

}
