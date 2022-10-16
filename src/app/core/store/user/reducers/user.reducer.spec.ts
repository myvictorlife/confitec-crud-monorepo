import * as fromUserReducer from '@confitec-store/user/reducers/user.reducer';
import * as fromUserActions from '@confitec-store/user/actions/user.actions';
import { User } from '@confitec-core/models/user.model';

describe('UserReducer', () => {
  const initialState = fromUserReducer.initialState;
  it('should add user on the store', () => {
    const user = { id: 1, firstName: 'Confitec'} as User;
    const action = fromUserActions.AddUserAction({ user });
    const state = fromUserReducer.reducer(initialState, action);

    expect(state.entities).toEqual({"1": {"firstName": "Confitec", "id": 1}});
  });

  it('should add user using InsertUsersSuccessfullyAction  on the store', () => {
    const user = { id: 1, firstName: 'Confitec'} as User;
    const action = fromUserActions.InsertUsersSuccessfullyAction({ user });
    const state = fromUserReducer.reducer(initialState, action);

    expect(state.entities).toEqual({"1": {"firstName": "Confitec", "id": 1}});
  });

  it('should add user using AddUsersAction  on the store', () => {
    const user = { id: 1, firstName: 'Confitec'} as User;
    const user2 = { id: 2, firstName: 'Confitec 2'} as User;
    const users: User[] = [user, user2];
    const action = fromUserActions.AddUsersAction({ users });
    const state = fromUserReducer.reducer(initialState, action);

    expect(state.ids).toEqual([1, 2]);
  });
});