import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducers';
import { TypedFilters } from 'src/app/filters/filters.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos!: Todo[];
  currentFilter!: TypedFilters;

  constructor(private store: Store<AppState>) {
    store.subscribe({
      next: (store) => {
        this.todos = store.todos;
        this.currentFilter = store.filters;
      },
      error: (err) => console.log(err),
    })
  }
}
