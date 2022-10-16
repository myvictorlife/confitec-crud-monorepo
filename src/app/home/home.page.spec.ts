import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let spectator: Spectator<HomePage>;
  const createComponent = createComponentFactory({
    component: HomePage,
    imports: [
      IonicModule.forRoot(),
      RouterModule,
      RouterTestingModule
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
