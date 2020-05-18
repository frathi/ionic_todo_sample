import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/types';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.page.html',
  styleUrls: ['./filtered.page.scss'],
})
export class FilteredPage implements OnInit {
  public filtered: Todo[] = []
  public searchQuery: string = ""

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.filtered = this.todoService.todos
  }

  updateFilter() {
    this.filtered = this.todoService.filterTodosForTitle(this.searchQuery)
  }

}
