import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';
import { AppState } from '../../app.reducers';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @ViewChild('editBox') editBox!: ElementRef<HTMLInputElement>;
  @Input() todo!: Todo;

  checkBoxInput!: FormControl;
  txtInputEditable!: FormControl;
  togggleEditable: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.checkBoxInput = new FormControl(this.todo.completed);
    this.txtInputEditable = new FormControl(
      this.todo.text, [Validators.required, Validators.minLength(3)]
    );

    this.checkBoxInput.valueChanges.subscribe(value => {
      this.store.dispatch(
        actions.edit({ ...this.todo, completed: value })
      );
    })
  }

  onOpenEdit(): void {
    this.togggleEditable = true;

    setTimeout(() => {
      this.editBox.nativeElement.select();
    }, 1)
  }

  onCloseEdit(): void {
    if (this.txtInputEditable.valid) {
      this.store.dispatch(
        actions.edit({ ...this.todo, text: this.txtInputEditable.value })
      )
      this.togggleEditable = false;
    }
    else {
      return
    }
  }

  onDelete(): void {
    this.store.dispatch(actions.remove({ id: this.todo.id }))
  }
}
