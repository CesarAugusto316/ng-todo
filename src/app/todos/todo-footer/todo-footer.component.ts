import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TypedFilters } from 'src/app/filters/filters.actions';
import { AppState } from '../../app.reducers';
import * as actions from '../../filters/filters.actions';
import { removeCompleted } from '../../todos/todo.actions'


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  currentFilter!: TypedFilters;
  filters: TypedFilters[] = ['all', 'completed', 'pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(store => {
      this.currentFilter = store.filters;
      this.pending = store.todos.filter(todo => todo.completed === false).length;
    })
  }

  onChangeFilter(filter: TypedFilters): void {
    this.store.dispatch(actions.setFilter({ filter }))
  }

  onClearCompleted() {
    this.store.dispatch(removeCompleted())
  }
}
