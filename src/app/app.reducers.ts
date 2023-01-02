import { ActionReducerMap } from '@ngrx/store';
import { TypedFilters } from './filters/filters.actions';
import { filterReducer } from './filters/fitlers.reducers';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducers';


export interface AppState {
  todos: Todo[],
  filters: TypedFilters
};

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filters: filterReducer
};
