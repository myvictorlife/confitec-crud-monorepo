
import { User } from '@confitec-models/user.model';
import * as fromUser from '../actions/user.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

export interface UserState extends EntityState<User> {
    // additional entity state properties
    selectedUserId: number | null;
    error: any;
}

export const selectUserId = (a: User): number => a.id;

export const sortByName = (a: User, b: User): number => a.firstName.localeCompare(b.firstName);

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: selectUserId,
    sortComparer: sortByName,
});

export const initialState: UserState = adapter.getInitialState({
    // additional entity state properties
    selectedUserId: null,
    error: undefined
});

export const reducer = createReducer(
    initialState,
    on(fromUser.AddUserAction, (state, { user }) => adapter.addOne(user, state)),
    on(fromUser.AddUsersAction, (state, { users }) => adapter.addMany(users, state)),
    on(fromUser.UpdateUserSuccessfullyAction, (state, { user }) => adapter.updateOne({ id: user.id, changes: { ...user }}, state)),
    on(fromUser.setSelectedUserId, (state, { selectedUserId }) => ({
        ...state,
        selectedUserId,
    })),
    on(fromUser.DeleteUserAction, (state, { user }) => adapter.removeOne(user.id, state)),
    on(fromUser.ClearUsersAction, (state) => adapter.removeAll({ ...state, selectedUserId: null })),
);

export const getSelectedUserId = (state: UserState) => state.selectedUserId;

// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;

// select the dictionary of user entities
export const selectUserEntities = selectEntities;

// select the array of users
export const selectAllUsers = selectAll;

// select the total user count
export const selectUserTotal = selectTotal;

