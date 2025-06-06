import { Pipe, PipeTransform } from '@angular/core';

type Todo = {
  label: string;
  status: string;
};

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(todoCollection: Todo[], filteredStatus: string): Todo[] {
    console.log('[TANSFORMS]');
    if (filteredStatus === '') {
      return todoCollection;
    }

    const resultArray = [];
    for (let todo of todoCollection) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}
