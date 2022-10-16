import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@confitec-core/models/user.model';
import * as fromUserActions from '@confitec-store/user/actions/user.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'confitec-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss'],
})
export class UserNewComponent implements OnInit {

  newUser = {} as User;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {}

  redirectToUserListPage() {
    this.router.navigate(['user-crud']);
  }

  submitForm(user: User) {
    this.store.dispatch(fromUserActions.InsertUsersAction({user}));
    this.redirectToUserListPage();
  }

}
