
import { ReactiveFormsModule } from '@angular/forms';
import { ConfitecComponentsModule } from '@confitec-components/components.module';
import { CoreModule } from '@confitec-core/core.module';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EffectsModule, EffectsRootModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { UserFormComponent } from '../user-form/user-form.component';

import { UserNewComponent } from './user-new.component';

describe('UserNewComponent', () => {
  let spectator: Spectator<UserNewComponent>;
  let actions: Observable<any>;
  const createComponent = createComponentFactory({
    component: UserNewComponent,
    imports: [
      IonicModule.forRoot(),
      ReactiveFormsModule,
      ConfitecComponentsModule,
      EffectsModule.forRoot([]),
      CoreModule
    ],
    declarations: [
      UserNewComponent,
      UserFormComponent,
    ],
    providers: [
      provideMockStore({}),
      provideMockActions(() => actions)
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
