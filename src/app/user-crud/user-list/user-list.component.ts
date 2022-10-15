import { Component, OnInit } from '@angular/core';
import { User } from '@confitec-core/models/user.model';
import { selectAllUsers } from '@confitec-core/store/user/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'confitec-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  selectAllUsers$: Observable<User[]> = this.store.select(selectAllUsers);
  constructor(private store: Store) { }

  ngOnInit() {}

}
