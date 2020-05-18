import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'show-todo',
  templateUrl: './show-todo.component.html',
  styleUrls: ['./show-todo.component.scss'],
})
export class ShowTodoComponent implements OnInit {
  @Input()
  public title: string = ""

  @Input()
  public body: string = ""

  @Output()
  public deleteTodo = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  emitDeleteTodo() {
    this.deleteTodo.emit()
  }

}
