import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@confitec-core/models/user.model';
import * as fromUser from '@confitec-store/user/actions/user.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'confitec-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  constructor(private store: Store, private router: Router) { }

  ngOnInit() {}

  redirectToEditPage() {
    this.store.dispatch(fromUser.setSelectedUserId({ selectedUserId: this.user.id}));
    this.router.navigate(['user-crud/edit']);
  }

  removeUser(user: User) {
    this.store.dispatch(fromUser.DeleteUserAction({ user }));
  }

}
