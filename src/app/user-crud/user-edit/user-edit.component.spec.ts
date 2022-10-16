import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { UserEditComponent } from './user-edit.component';

describe('UserEditComponent', () => {

  let spectator: Spectator<UserEditComponent>;
  const createComponent = createComponentFactory({
    component: UserEditComponent,
    imports: [
      IonicModule.forRoot(),
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
      UserEditComponent
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
