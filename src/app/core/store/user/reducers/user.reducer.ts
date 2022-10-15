
import { User } from "src/app/core/models/user.model";
import * as fromUser from "../actions/user.actions";

export interface UserState {
    data: User[];
    error: any;
}

export const initialState: UserState = {
    data: [],
    error: undefined
}

export function reducer(
    state = initialState,
    action: fromUser.ActionUnion
): UserState {

    switch (action.type) {
        case fromUser.ActionTypes.AddUser: {
            return {
                ...state,
                data: action.payload
            }
        }
        case fromUser.ActionTypes.UpdateUser: {
            return {
                ...state
            }
        }
        case fromUser.ActionTypes.FetchAllUsersFailed: {
            return {
                ...state,
                error: action.payload
            }
        }
        case fromUser.ActionTypes.UpdateUserSuccessfully: {
            return {
                ...state,
            }
        }
        case fromUser.ActionTypes.UpdateUserFailed: {
            return {
                ...state,
                error: action.payload
            }
        }
        case fromUser.ActionTypes.DeleteUserSuccessfyly: {
            return {
                ...state
            }
        }
        case fromUser.ActionTypes.DeleteUserFailed: {
            return {
                ...state
            }
        }
        default: {
            return state;
        }
    }
}