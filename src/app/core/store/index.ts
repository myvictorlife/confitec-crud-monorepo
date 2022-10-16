import {
    ActionReducerMap,
    MetaReducer,
  } from '@ngrx/store';
import { environment } from '@environment';
import * as fromUser from '@confitec-store/user/reducers/user.reducer';
import * as fromEducation from '@confitec-store/education/reducers/education.reducer';

  export interface ConfitecState {
    users: fromUser.UserState;
    educations: fromEducation.EducationState;
  }
  export const reducers: ActionReducerMap<ConfitecState> = {
    users: fromUser.reducer,
    educations: fromEducation.reducer
  };
  export const metaReducers: MetaReducer<ConfitecState>[] = !environment.production
    ? []
    : [];
