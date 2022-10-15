import { Action } from "@ngrx/store";
import { User } from "@confitec-core/models/user.model";

export enum ActionTypes {
    AddUser = "[User Service] Create User",
    UpdateUser = "[User Service] Update User",
    UpdateUserSuccessfully = "[User Service] Update User Successfully",
    UpdateUserFailed = "[User Service] Update User Failed",
    FetchAllUsers = "[User Service] Fetch All Users",
    FetchAllUsersFailed = "[User Service] Fetch All Users Failed",
    FetchUserById = "[User Service] Fetch User By Id",
    DeleteUser = "[User Service] Delete User",
    DeleteUserSuccessfyly = "[User Service] Delete User Successfully",
    DeleteUserFailed = "[User Service] Delete User Failed",
}

export class AddUser implements Action {
    readonly type = ActionTypes.AddUser;

    constructor(public payload: User[]) {}
}

export class UpdateUser implements Action {
    readonly type = ActionTypes.UpdateUser;

    constructor(public payload: User) {}
}

export class UpdateUserSuccessfully implements Action {
    readonly type = ActionTypes.UpdateUserSuccessfully;

    constructor(public payload: User) {}
}

export class UpdateUserFailed implements Action {
    readonly type = ActionTypes.UpdateUserFailed;

    constructor(public payload: any) {}
}

export class FetchAllUsers implements Action {
    readonly type = ActionTypes.FetchAllUsers;

    constructor() {}
}

export class FetchAllUsersFailed implements Action {
    readonly type = ActionTypes.FetchAllUsersFailed;

    constructor(public payload: any) {}
}

export class FetchUserById implements Action {
    readonly type = ActionTypes.FetchUserById;

    constructor(public payload: number) {}
}

export class DeleteUser implements Action {
    readonly type = ActionTypes.DeleteUser;

    constructor(public payload: User) {}
}

export class DeleteUserSuccessfyly implements Action {
    readonly type = ActionTypes.DeleteUserSuccessfyly;

    constructor(public payload: User) {}
}

export class DeleteUserFailed implements Action {
    readonly type = ActionTypes.DeleteUserFailed;

    constructor(public payload: any) {}
}

export type ActionUnion = 
    AddUser |
    UpdateUser | UpdateUserSuccessfully | UpdateUserFailed |
    FetchUserById | FetchAllUsersFailed |
    DeleteUser | DeleteUserSuccessfyly | DeleteUserFailed;