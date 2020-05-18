import { Component, OnInit } from '@angular/core';
import { Todo } from '../../types';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {
  private title: string = "";
  private body: string = "";

  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
    this.init()
  }

  init() {
    this.title = ""
    this.body = ""
  }

  saveTodo() {
    this.todoService.addTodo(this.title, this.body)
    this.init()
    this.router.navigate(["/todos"])
  }

  isTodoUncomplete(): boolean {
    return this.title === null || this.body === null || this.title.length === 0 || this.body.length === 0
  }
}
