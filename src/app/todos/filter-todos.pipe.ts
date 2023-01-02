import { Pipe, PipeTransform } from '@angular/core';
import { TypedFilters } from '../filters/filters.actions';
import { Todo } from './models/todo.model';


@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {

  transform(value: Todo[], filter: TypedFilters): Todo[] {
    switch (filter) {
      case 'all':
        return value

      case 'completed':
        return value.filter(todo => todo.completed === true)

      case 'pending':
        return value.filter(todo => todo.completed === false)

      default:
        return value;
    }
  }
}
