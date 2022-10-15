import {
    ActionReducerMap,
    MetaReducer,
  } from '@ngrx/store';
import { environment } from '@environment';
import * as fromUser from './user/reducers/user.reducer';

  export interface ConfitecState {
    users: fromUser.UserState;
  }
  export const reducers: ActionReducerMap<ConfitecState> = {
    users: fromUser.reducer
  };
  export const metaReducers: MetaReducer<ConfitecState>[] = !environment.production
    ? []
    : [];
