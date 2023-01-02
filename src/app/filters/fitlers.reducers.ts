import { createReducer, on } from '@ngrx/store';
import { setFilter, TypedFilters } from './filters.actions';


export const initialState = 'all' as TypedFilters;

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) => filter)
);
