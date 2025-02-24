import { Component, inject, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../Model/todo.type';
import { catchError } from 'rxjs';

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
    this.todoService.getTodosFromApi()
    .pipe(
      catchError((err) => {
      console.log(err);
      throw err;
    })
  )
  .subscribe((todos) => {
    this.todoItems.set(todos);
  });
  }
}

