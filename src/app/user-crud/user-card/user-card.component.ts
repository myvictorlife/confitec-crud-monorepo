import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '@confitec-core/models/user.model';

@Component({
  selector: 'confitec-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnInit {

  @Input() user: User;

  isEdit = false;

  constructor() { }

  ngOnInit() {}


  setIsEdit() {
    this.isEdit = !this.isEdit;
  }

}
