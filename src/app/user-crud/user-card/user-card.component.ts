import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
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

  isEdit = false;

  constructor(private store: Store) { }

  ngOnInit() {}

  setIsEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) {
      this.store.dispatch(fromUser.setSelectedUserId({ selectedUserId: this.user.id}));
    } else {

    }
  }

}
