import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../todo.actions'


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  txtInput = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(private store: Store<AppState>) { }

  addTodo(): void {
    if (this.txtInput.valid) {
      this.store.dispatch(
        actions.add({ text: this.txtInput.value as string })
      );
      this.txtInput.reset()
    }
    else {
      return
    }
  }
}
