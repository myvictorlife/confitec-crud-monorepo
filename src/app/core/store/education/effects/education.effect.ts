
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromEducationActions from '@confitec-store/education/actions/education.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EducationService } from '@confitec-core/services/education/education.service';
import { Education } from '@confitec-core/models/education.model';

@Injectable()
export class EducationEffects {

    fetchAllEducations$ = createEffect(() => this.actions$
        .pipe(
            ofType(fromEducationActions.ActionTypes.GET_ALL_EDUCATIONS),
            switchMap(() => this.educationService.getEducations()
                .pipe(
                    map((educations: Education[]) => fromEducationActions.SetAllEducationAction({ educations })),
                    catchError((error) => of(fromEducationActions.GetAllEducationFailedAction({ error })))
                ))));

    constructor(private actions$: Actions, private educationService: EducationService) { }
}
