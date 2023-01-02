import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';


export const add = createAction('[Todo] add', props<{ text: string }>());
export const edit = createAction('[Todo] edit', props<Todo>());
export const remove = createAction('[Todo] remove', props<{ id: number }>());
export const toggleCompletedAll = createAction(
  '[Todo] toggleAll', props<{ toggleAll: boolean }>()
);
export const removeCompleted = createAction('[Todo] removeCompleted');
