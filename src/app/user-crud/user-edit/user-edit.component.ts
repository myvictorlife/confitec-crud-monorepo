import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from '@confitec-core/models/education.model';
import { User } from '@confitec-core/models/user.model';
import { Store } from '@ngrx/store';
import * as fromUserActions from '@confitec-store/user/actions/user.actions';
@Component({
  selector: 'confitec-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {

  @Input() user: User;

  userForm: FormGroup;

  educationsList: Education[] = [{
    id: 1,
    description: 'Infantil'
  }, {
    id: 2,
    description: 'Fundamental'
  }, {
    id: 3,
    description: 'Médio'
  }, {
    id: 4,
    description: 'Superior'
  }];

  constructor(private store: Store, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      firstName: [this.user.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [this.user.lastName],
      dob: [this.user.dob],
      email: [this.user.email, [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      educationId: [this.user.educationaId]
    });
  }

  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.userForm.get('dob').setValue(date, {
      onlyself: true
    });
  }

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  submitForm() {
    const user: User = this.userForm.value;
    this.store.dispatch(new fromUserActions.UpdateUserAction(user));
  }

}
