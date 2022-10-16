import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { provideMockStore } from '@ngrx/store/testing';

import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let spectator: Spectator<UserFormComponent>;
  const createComponent = createComponentFactory({
    component: UserFormComponent,
    imports: [
      IonicModule.forRoot(),
      ReactiveFormsModule
    ],
    declarations: [
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
