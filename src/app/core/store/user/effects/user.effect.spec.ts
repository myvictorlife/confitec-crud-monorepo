import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from '@confitec-core/services/user/user.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { UserEffects } from './user.effect';

describe('UserEffects', () => {
  let effects: UserEffects;
  let userService: UserService;
  let actions: Observable<any>;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        UserEffects,
        UserService,
        provideMockActions(() => actions)
      ],
    });
 
    effects = TestBed.get(UserEffects);
    userService = TestBed.get(UserService);
  });
 
  it('should work', () => {
    expect(effects).toBeTruthy();
  });

});