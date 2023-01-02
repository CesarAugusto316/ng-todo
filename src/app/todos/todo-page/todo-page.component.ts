import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../todo.actions'


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  toggleAllCheckBox = new FormControl(false);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.toggleAllCheckBox.valueChanges
      .subscribe({
        next: (value) => this.store.dispatch(
          actions.toggleCompletedAll({ toggleAll: value as boolean })
        ),
        error: (err) => console.log(err)
      })
  }
}
