
import { User } from '@confitec-models/user.model';
import * as fromUser from '../actions/user.actions';

export interface UserState {
    list: User[];
    error: any;
}

export const initialState: UserState = {
    list: [],
    error: undefined
};

export const reducer = (
    state = initialState,
    action: fromUser.ActionUnion
): UserState => {

    switch (action.type) {
        case fromUser.ActionTypes.ADD_USER: {
            return {
                ...state,
                list: action.payload
            };
        }
        case fromUser.ActionTypes.UPDATE_USER: {
            return {
                ...state
            };
        }
        case fromUser.ActionTypes.FETCH_ALL_USERS_FAILED: {
            return {
                ...state,
                error: action.payload
            };
        }
        case fromUser.ActionTypes.UPDATE_USER_SUCCESSFULLY: {
            return {
                ...state,
            };
        }
        case fromUser.ActionTypes.UPDATE_USER_FAILED: {
            return {
                ...state,
                error: action.payload
            };
        }
        case fromUser.ActionTypes.DELETE_USER_SUCCESSFULLY: {
            return {
                ...state
            };
        }
        case fromUser.ActionTypes.DELETE_USER_FAILED: {
            return {
                ...state
            };
        }
        default: {
            return state;
        }
    }
};

export const getAllUsers = (state: UserState) =>
  state?.list ?? [];
