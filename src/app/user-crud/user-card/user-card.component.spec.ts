import { User } from '@confitec-core/models/user.model';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { UserEditComponent } from '../user-edit/user-edit.component';

import { UserCardComponent } from './user-card.component';
import * as fromUser from '@confitec-store/user/actions/user.actions';

describe('UserCardComponent', () => {
  let spectator: Spectator<UserCardComponent>;
  let mockStore: MockStore;
  const createComponent = createComponentFactory({
    component: UserCardComponent,
    imports: [
      IonicModule.forRoot(),
    ],
    declarations: [
      UserCardComponent,
      UserEditComponent
    ],
    providers: [
      provideMockStore({})
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
    mockStore = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should remove user', () => {
    const spy = jest.spyOn(mockStore, 'dispatch');
    const user = { id: 1, firstName: 'Confitec' } as User;
    spectator.component.removeUser(user);
    expect(spy).toHaveBeenCalledWith(fromUser.DeleteUserAction({ user }));
  });
});
