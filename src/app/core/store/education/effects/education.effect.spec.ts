import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EducationService } from '@confitec-core/services/education/education.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { EducationEffects } from './education.effect';

describe('EducationEffects', () => {
  let effects: EducationEffects;
  let educationService: EducationService;
  let actions: Observable<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EducationEffects,
        EducationService,
        provideMockActions(() => actions)
      ],
    });
    effects = TestBed.get(EducationEffects);
    educationService = TestBed.get(EducationService);
  });

  it('should work', () => {
    expect(effects).toBeTruthy();
  });
});
