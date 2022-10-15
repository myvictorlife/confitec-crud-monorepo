import { Action } from '@ngrx/store';
import { User } from '@confitec-core/models/user.model';

export enum ActionTypes {
    /*eslint camelcase: ["error", {ignoreImports: true}]*/
    ADD_USER = '[User Service] Create User',
    UPDATE_USER = '[User Service] Update User',
    UPDATE_USER_SUCCESSFULLY = '[User Service] Update User Successfully',
    UPDATE_USER_FAILED = '[User Service] Update User Failed',
    FETCH_ALL_USERS = '[User Service] Fetch All Users',
    FETCH_ALL_USERS_FAILED = '[User Service] Fetch All Users Failed',
    FETCH_USER_BY_ID = '[User Service] Fetch User By Id',
    DELETE_USER = '[User Service] Delete User',
    DELETE_USER_SUCCESSFULLY = '[User Service] Delete User Successfully',
    DELETE_USER_FAILED = '[User Service] Delete User Failed',
}

export class AddUserAction implements Action {
    readonly type = ActionTypes.ADD_USER;

    constructor(public payload: User[]) {}
}

export class UpdateUserAction implements Action {
    readonly type = ActionTypes.UPDATE_USER;

    constructor(public payload: User) {}
}

export class UpdateUserSuccessfullyAction implements Action {
    readonly type = ActionTypes.UPDATE_USER_SUCCESSFULLY;

    constructor(public payload: User) {}
}

export class UpdateUserFailedAction implements Action {
    readonly type = ActionTypes.UPDATE_USER_FAILED;

    constructor(public payload: any) {}
}

export class FetchAllUsersAction implements Action {
    readonly type = ActionTypes.FETCH_ALL_USERS;

    constructor() {}
}

export class FetchAllUsersFailedAction implements Action {
    readonly type = ActionTypes.FETCH_ALL_USERS_FAILED;

    constructor(public payload: any) {}
}

export class FetchUserByIdAction implements Action {
    readonly type = ActionTypes.FETCH_USER_BY_ID;

    constructor(public payload: number) {}
}

export class DeleteUserAction implements Action {
    readonly type = ActionTypes.DELETE_USER;

    constructor(public payload: User) {}
}

export class DeleteUserSuccessfullyAction implements Action {
    readonly type = ActionTypes.DELETE_USER_SUCCESSFULLY;

    constructor(public payload: User) {}
}

export class DeleteUserFailedAction implements Action {
    readonly type = ActionTypes.DELETE_USER_FAILED;

    constructor(public payload: any) {}
}

export type ActionUnion =
    AddUserAction |
    UpdateUserAction | UpdateUserSuccessfullyAction | UpdateUserFailedAction |
    FetchUserByIdAction | FetchAllUsersFailedAction |
    DeleteUserAction | DeleteUserSuccessfullyAction | DeleteUserFailedAction;
