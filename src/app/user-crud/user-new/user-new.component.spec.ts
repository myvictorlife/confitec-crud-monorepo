import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { UserFormComponent } from '../user-form/user-form.component';

import { UserNewComponent } from './user-new.component';

describe('UserNewComponent', () => {
  
  let spectator: Spectator<UserNewComponent>;
  const createComponent = createComponentFactory({
    component: UserNewComponent,
    imports: [
      IonicModule.forRoot(),
      ReactiveFormsModule
    ],
    declarations: [
      UserNewComponent,
      UserFormComponent
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
