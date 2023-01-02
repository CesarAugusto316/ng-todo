import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { add, edit, toggleCompletedAll, remove, removeCompleted } from './todo.actions';


const initialState: Todo[] = [];

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => state.concat([new Todo(text)])),
  on(edit,
    (state, { type, ...todoPayload }) => state.map((todo) => (todo.id === todoPayload.id) ?
      ({ ...todo, ...todoPayload })
      : (todo))
  ),
  on(remove, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggleCompletedAll, (state, { toggleAll }) => state.map(todo => ({ ...todo, completed: toggleAll }))),
  on(removeCompleted, (state) => state.filter(todo => todo.completed === false))
);
