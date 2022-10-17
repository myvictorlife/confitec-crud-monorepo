import { Component, Input, OnInit } from '@angular/core';
import { Education } from '@confitec-core/models/education.model';
import { selectAllUsers } from '@confitec-core/store/user/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'confitec-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input() educationsList: Education[];
  selectAllUsers$ = this.store.select(selectAllUsers);
  constructor(private store: Store) { }

  ngOnInit() {}

}
