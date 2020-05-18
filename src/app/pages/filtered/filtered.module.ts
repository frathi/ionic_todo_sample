import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilteredPageRoutingModule } from './filtered-routing.module';

import { FilteredPage } from './filtered.page';
import { ShowTodoModule } from 'src/app/components/show-todo/show-todo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilteredPageRoutingModule,
    ShowTodoModule,
  ],
  declarations: [FilteredPage]
})
export class FilteredPageModule {}
