
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromUserActions from '../actions/user.actions';
import { UserService } from '@confitec-services/user/user.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from '@confitec-core/models/user.model';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    fetch$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.FETCH_ALL_USERS),
            switchMap(() => this.userService.fetchAll()
                .pipe(
                    map((users: User[]) => fromUserActions.AddUsersAction({ users })),
                    catchError((error) => of(fromUserActions.FetchAllUsersFailedAction(error)))
                )
            )));

    addUser$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.INSERT_USER),
            switchMap(({user}) => this.userService.addUser(user)
                .pipe(
                    map((newUser: User) => fromUserActions.InsertUsersSuccessfullyAction({user: newUser})),
                    catchError((error) => of(fromUserActions.InsertUsersFailedAction(error)))
                )
            )));


    update$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.UPDATE_USER),
            switchMap(({ user }) => this.userService.update(user)
                .pipe(
                    map((newUser) => fromUserActions.UpdateUserSuccessfullyAction({user: newUser})),
                    catchError((error) => of(fromUserActions.UpdateUserFailedAction(error)))
                )
            )));

    delete$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.DELETE_USER),
            switchMap((user) => this.userService.delete(user)
                .pipe(
                    map((oldUser: User) => fromUserActions.DeleteUserSuccessfullyAction({user: oldUser})),
                    catchError((error) => of(fromUserActions.DeleteUserFailedAction(error)))
                )
            )));

    constructor(private actions$: Actions, private userService: UserService) { }
}
