
import * as fromEducation from '@confitec-store/education/reducers/education.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectEducationState =
  createFeatureSelector<fromEducation.EducationState>('educations');


export const selectAllEducations = createSelector(
  selectEducationState,
  fromEducation.selectAllEducations
);
