import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
  } from '@ngrx/store';
import { environment } from '@environment';
import * as fromUser from './user/reducers/user.reducer';
  
  export interface ConfitecState {
    user: fromUser.UserState
  }
  export const reducers: ActionReducerMap<ConfitecState> = {
    user: fromUser.reducer
  };
  export const metaReducers: MetaReducer<ConfitecState>[] = !environment.production
    ? []
    : [];