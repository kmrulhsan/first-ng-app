import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from '../Model/todo.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoItems: Array<Todo> = [ {
    id: 0,
    userId: 1,
    completed: false,
    title: 'Groceries',
  },
  {
    id: 0,
    userId: 1,
    completed: false,
    title: 'Shopping'
  },
 ]
  constructor() { }
}
