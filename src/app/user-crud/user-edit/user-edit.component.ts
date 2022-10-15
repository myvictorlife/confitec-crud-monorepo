import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from '@confitec-core/models/education.model';
import { User } from '@confitec-core/models/user.model';
import { Store } from '@ngrx/store';
import * as fromUserActions from '@confitec-store/user/actions/user.actions';
import { selectCurrentUser } from '@confitec-core/store/user/selectors/user.selector';
@Component({
  selector: 'confitec-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {

  user$ = this.store.select(selectCurrentUser);

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

  constructor(private store: Store, public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // this.user$.subscribe((user) => {
    //   if (user) this.initForm(user);
    // });
  }

  getDate(e) {
    const date = new Date(e.target.value).toISOString().substring(0, 10);
    this.userForm.get('dob').setValue(date, {
      onlyself: true
    });
  }

  initForm(user) {
    this.userForm = this.formBuilder.group({
      firstName: [user.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [user.lastName],
      dob: [user.dob],
      email: [user.email, [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      educationId: [user.educationaId]
    });

  }

  compareWith(o1, o2) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  submitForm() {
    const user: User = this.userForm.value;
    this.store.dispatch(fromUserActions.UpdateUser({user}));
  }

}
