import { createAction, props } from '@ngrx/store';


export type TypedFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction('[Todo] setFilter', props<{ filter: TypedFilters }>());
