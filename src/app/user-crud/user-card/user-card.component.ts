import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@confitec-core/models/user.model';
import { Education } from '@confitec-core/models/education.model';
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
  @Input() educationsList: Education[];

  constructor(private store: Store, private router: Router, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  getEducationName(educationId: number): string {
    return this.educationsList?.filter((education) => education.id === educationId)?.[0]?.description ?? '';
  }

  redirectToEditPage() {
    this.store.dispatch(fromUser.setSelectedUserId({ selectedUserId: this.user.id}));
    this.router.navigate(['user-crud/edit']);
  }

  removeUser(user: User) {
    this.store.dispatch(fromUser.DeleteUserAction({ user }));
  }

  downloadViewImage(event, url) {
    event.stopPropagation();
    window.open(encodeURI(url),'_system','location=yes');
  }

}
