import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TodosPageRoutingModule } from './todos-routing.module';
import { TodosPage } from './todos.page';
import { ShowTodoModule } from 'src/app/components/show-todo/show-todo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodosPageRoutingModule,
    ShowTodoModule,
  ],
  declarations: [TodosPage]
})
export class TodosPageModule {}
