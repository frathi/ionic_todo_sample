import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {

  constructor(public todoService: TodoService,
    private router: Router) {
    }




  ngOnInit() {
  }

  public addTodo() {
    this.router.navigate(['/add-todo'])
  }

  public async deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }
}
