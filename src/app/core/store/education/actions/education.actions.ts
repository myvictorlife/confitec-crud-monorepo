import { Education } from '@confitec-core/models/education.model';
import { createAction, props } from '@ngrx/store';

export enum ActionTypes {
    GET_ALL_EDUCATIONS = '[Education Service] Get All Educations',
    SET_ALL_EDUCATIONS = '[Education Service] Set All Educations',
    GET_ALL_EDUCATIONS_FAILED = '[Education Service] Set All Educations Failed',
}

export const GetAllEducationAction = createAction(
    ActionTypes.GET_ALL_EDUCATIONS,
);

export const SetAllEducationAction = createAction(
    ActionTypes.SET_ALL_EDUCATIONS,
    props<{ educations: Education[] }>()
);

export const GetAllEducationFailedAction = createAction(
    ActionTypes.GET_ALL_EDUCATIONS_FAILED,
    props<{ error: any }>()
);
