
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';


import * as fromUserActions from '../actions/user.actions';
import { UserService } from 'src/app/core/services/user/user.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    fetch$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.FetchAllUsers),
            switchMap(() => this.userService.fetchAll()
                .pipe(
                    map((users: User[]) => new fromUserActions.AddUser(users)),
                    catchError((error) => of(new fromUserActions.FetchAllUsersFailed(error)))
                )
            )));

    fetchById$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.FetchUserById),
            switchMap((userId) => this.userService.fetchById(userId)
                .pipe(
                    map((users: User[]) => new fromUserActions.AddUser(users)),
                    catchError((error) => of(new fromUserActions.FetchAllUsersFailed(error)))
                )
            )));


    update$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.UpdateUser),
            switchMap((user) => this.userService.update(user)
                .pipe(
                    map((user: User) => new fromUserActions.UpdateUserSuccessfully(user)),
                    catchError((error) => of(new fromUserActions.UpdateUserFailed(error)))
                )
            )));

    delete$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromUserActions.ActionTypes.DeleteUser),
            switchMap((user) => this.userService.delete(user)
                .pipe(
                    map((user: User) => new fromUserActions.DeleteUserSuccessfyly(user)),
                    catchError((error) => of(new fromUserActions.DeleteUserFailed(error)))
                )
            )));

    constructor(private actions$: Actions, private userService: UserService) { }
}