import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';
import { ConfitecComponentsModule } from '@confitec-components/components.module';


import { UserFormComponent } from './user-form.component';
import { CoreModule } from '@confitec-core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

describe('UserFormComponent', () => {
  let spectator: Spectator<UserFormComponent>;
  let actions: Observable<any>;
  const createComponent = createComponentFactory({
    component: UserFormComponent,
    imports: [
      IonicModule.forRoot(),
      ReactiveFormsModule,
      ConfitecComponentsModule,
      EffectsModule.forRoot([]),
      CoreModule
    ],
    declarations: [
      UserFormComponent
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
