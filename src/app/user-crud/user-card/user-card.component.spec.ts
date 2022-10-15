import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { UserEditModalComponent } from '../modals/user-edit-modal/user-edit-modal.component';
import { UserEditComponent } from '../user-edit/user-edit.component';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {

  let spectator: Spectator<UserCardComponent>;
  const createComponent = createComponentFactory({
    component: UserCardComponent,
    imports: [
      IonicModule.forRoot(),
    ],
    declarations: [
      UserCardComponent,
      UserEditComponent,
      UserEditModalComponent
    ],
    providers: [
      provideMockStore({})
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
