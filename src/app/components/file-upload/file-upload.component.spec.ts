import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { CoreModule } from '@confitec-core/core.module';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { EffectsModule } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let spectator: Spectator<FileUploadComponent>;
  let actions: Observable<any>;
  const createComponent = createComponentFactory({
    component: FileUploadComponent,
    imports: [
      IonicModule.forRoot(),
      EffectsModule.forRoot([]),
      CoreModule,
      AngularFireModule.initializeApp({}),
      AngularFireDatabaseModule
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
