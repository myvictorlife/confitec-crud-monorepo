
import * as fromUser from '@confitec-store/user/reducers/user.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUserState =
createFeatureSelector<fromUser.UserState>('user');

export const selectAllUsers = createSelector(
    selectUserState,
    fromUser.getAllUsers
  );
