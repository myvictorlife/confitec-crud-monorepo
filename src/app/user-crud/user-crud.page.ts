import { Component, OnInit } from '@angular/core';
import { User } from '@confitec-core/models/user.model';
import { selectAllUsers } from '@confitec-core/store/user/selectors/user.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'confitec-user-crud',
  templateUrl: './user-crud.page.html',
  styleUrls: ['./user-crud.page.scss'],
})
export class UserCrudPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
