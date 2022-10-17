import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { selectAllEducations } from '@confitec-core/store/education/selectors/education.selector';
import { Store } from '@ngrx/store';
import { User } from '@confitec-core/models/user.model';
import { UploadFile } from '@confitec-core/models/upload-file.model';

@Component({
  selector: 'confitec-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  @Output() userFormChange = new EventEmitter<User>();

  userForm: FormGroup;
  educationsList$ = this.store.select(selectAllEducations);
  barStatus = false;

  maxDate: string;

  constructor(private store: Store, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm(this.user ?? {} as User);
  }

  initForm(user: User) {
    const dob = user.dob ? (new Date(user.dob)).toJSON() : '2000-01-01';
    this.userForm = this.formBuilder.group({
      firstName: [user.firstName, [Validators.required, Validators.minLength(2)]],
      lastName: [user.lastName],
      dob: [dob],
      email: [user.email, [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      educationId: [user.educationaId, [Validators.required]],
      historyEducation: [user.historyEducation, [Validators.required]]
    });
  }

  getTodayDate() {
    this.maxDate = (new Date(new Date().toISOString())).toJSON();
  }

  compareWith(o1, o2) {
    return o1 === o2;
  };

  setFileUrl(uploadFile: UploadFile) {
    this.userForm.get('historyEducation').setValue(uploadFile);
  }

  changeBarStatus(barStatus: boolean) {
    this.barStatus = barStatus;
  }

  downloadViewImage(url){
    window.open(encodeURI(url),'_system', 'location=yes');
  }

  submitForm() {
    if (!this.userForm.invalid) {
      this.userFormChange.emit({ id: this.user?.id, ...this.userForm.value});
    } else {
      this.userForm.markAsDirty();
      this.userForm.markAllAsTouched();
    }
  }

}
