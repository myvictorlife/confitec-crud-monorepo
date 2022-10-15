
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
                    map((users: User[]) => new fromUserActions.AddUserAction(users)),
                    catchError((error) => of(new fromUserActions.FetchAllUsersFailedAction(error)))
                )
            )));

    fetchById$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.FETCH_USER_BY_ID),
            switchMap((userId) => this.userService.fetchById(userId)
                .pipe(
                    map((users: User[]) => new fromUserActions.AddUserAction(users)),
                    catchError((error) => of(new fromUserActions.FetchAllUsersFailedAction(error)))
                )
            )));


    update$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.UPDATE_USER),
            switchMap((user) => this.userService.update(user)
                .pipe(
                    map((newUser) => new fromUserActions.UpdateUserSuccessfullyAction(newUser)),
                    catchError((error) => of(new fromUserActions.UpdateUserFailedAction(error)))
                )
            )));

    delete$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.DELETE_USER),
            switchMap((user) => this.userService.delete(user)
                .pipe(
                    map((oldUser: User) => new fromUserActions.DeleteUserSuccessfullyAction(oldUser)),
                    catchError((error) => of(new fromUserActions.DeleteUserFailedAction(error)))
                )
            )));

    constructor(private actions$: Actions, private userService: UserService) { }
}
