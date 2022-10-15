
import { User } from '@confitec-models/user.model';
import * as fromUser from '../actions/user.actions';

export interface UserState {
    data: User[];
    error: any;
}

export const initialState: UserState = {
    data: [],
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
                data: action.payload
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
