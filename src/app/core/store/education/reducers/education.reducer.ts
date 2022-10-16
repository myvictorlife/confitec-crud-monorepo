
import * as fromEducationActions from '../actions/education.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Education } from '@confitec-core/models/education.model';
import { sampleTime } from 'rxjs/operators';

export interface EducationState extends EntityState<Education> {
    error: any;
}

export const adapter: EntityAdapter<Education> = createEntityAdapter<Education>({
});

export const initialState: EducationState = adapter.getInitialState({
    // additional entity state properties
    error: undefined
});

export const reducer = createReducer(
    initialState,
    on(fromEducationActions.SetAllEducationAction, (state, { educations }) => adapter.addMany(educations, state)),
    on(fromEducationActions.GetAllEducationFailedAction, (state, { error }) => ({ ...state, error}))
);


// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = adapter.getSelectors();

// select the array of education ids
export const selectEducationIds = selectIds;

// select the dictionary of education entities
export const selectEducationEntities = selectEntities;

// select the array of educations
export const selectAllEducations = selectAll;

// select the total education count
export const selectEducationTotal = selectTotal;

