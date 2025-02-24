import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../Model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  ngOnInit(): void{
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems);
  }
}

