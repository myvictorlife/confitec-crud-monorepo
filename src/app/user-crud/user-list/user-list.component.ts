import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Education } from '@confitec-core/models/education.model';
import { User } from '@confitec-core/models/user.model';

@Component({
  selector: 'confitec-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  @Input() educationsList: Education[];
  @Input() userList: User[];

  constructor() { }

  ngOnInit() {}

}
