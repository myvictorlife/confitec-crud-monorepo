import { Component, Input, OnInit } from '@angular/core';
import { User } from '@confitec-core/models/user.model';

@Component({
  selector: 'confitec-user-edit-modal',
  templateUrl: './user-edit-modal.component.html',
  styleUrls: ['./user-edit-modal.component.scss'],
})
export class UserEditModalComponent implements OnInit {

  @Input() isModalOpen = false;
  @Input() user: User;

  constructor() { }

  ngOnInit() {}

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

}
