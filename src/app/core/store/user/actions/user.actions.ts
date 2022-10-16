import { createAction, props } from '@ngrx/store';
import { User } from '@confitec-core/models/user.model';

export enum ActionTypes {
    INSERT_USER = '[User Service] Insert User',
    INSERT_USER_SUCCESSFULLY = '[User Service] Insert User Successfully',
    INSERT_USER_FAILED = '[User Service] Insert User Failed',
    ADD_USER = '[User Service] Create User',
    ADD_USERS = '[User Service] Create Users',
    UPDATE_USER = '[User Service] Update User',
    UPDATE_USER_SUCCESSFULLY = '[User Service] Update User Successfully',
    UPDATE_USER_FAILED = '[User Service] Update User Failed',
    FETCH_ALL_USERS = '[User Service] Fetch All Users',
    FETCH_ALL_USERS_FAILED = '[User Service] Fetch All Users Failed',
    FETCH_USER_BY_ID = '[User Service] Fetch User By Id',
    DELETE_USER = '[User Service] Delete User',
    DELETE_USER_SUCCESSFULLY = '[User Service] Delete User Successfully',
    DELETE_USER_FAILED = '[User Service] Delete User Failed',
    CLEAR_USERS = '[User] Clear Users',
    USER_SELECTED = '[User] Set Selected User Id'
}

export const InsertUsersAction = createAction(
    ActionTypes.INSERT_USER,
    props<{ user: User }>()
);

export const InsertUsersSuccessfullyAction = createAction(
    ActionTypes.INSERT_USER_SUCCESSFULLY,
    props<{ user: User }>()
);

export const InsertUsersFailedAction = createAction(
    ActionTypes.INSERT_USER_FAILED,
    props<{ error: any }>()
);


export const AddUsersAction = createAction(
    ActionTypes.ADD_USERS,
    props<{ users: User[] }>()
);


export const AddUserAction = createAction(
    ActionTypes.ADD_USER,
    props<{ user: User }>()
);

export const UpdateUser = createAction(
    ActionTypes.UPDATE_USER,
    props<{ user: User }>()
);

export const UpdateUserSuccessfullyAction = createAction(
    ActionTypes.UPDATE_USER_SUCCESSFULLY,
    props<{ user: User }>()
);

export const UpdateUserFailedAction = createAction(
    ActionTypes.UPDATE_USER_FAILED,
    props<{ error: any}>()
);

export const FetchAllUsersAction = createAction(
    ActionTypes.FETCH_ALL_USERS,
);

export const FetchAllUsersFailedAction = createAction(
    ActionTypes.FETCH_ALL_USERS_FAILED,
    props<{ error: any}>()
);

export const FetchUserByIdAction = createAction(
    ActionTypes.FETCH_USER_BY_ID,
    props<{ id: number }>()
);

export const DeleteUserAction = createAction(
    ActionTypes.DELETE_USER,
    props<{ user: User }>()
);

export const DeleteUserSuccessfullyAction = createAction(
    ActionTypes.DELETE_USER_SUCCESSFULLY,
    props<{ user: User }>()
);

export const DeleteUserFailedAction = createAction(
    ActionTypes.DELETE_USER_FAILED,
    props<{ payload: any }>()
);

export const ClearUsersAction = createAction(
    ActionTypes.CLEAR_USERS,
);

export const setSelectedUserId = createAction(
    ActionTypes.USER_SELECTED,
    props<{ selectedUserId: number }>()
);

