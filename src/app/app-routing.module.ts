import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    loadChildren: () => import('./pages/todos/todos.module').then( m => m.TodosPageModule)
  },
  {
    path: 'add-todo',
    loadChildren: () => import('./pages/add-todo/add-todo.module').then( m => m.AddTodoPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'filtered',
    loadChildren: () => import('./pages/filtered/filtered.module').then( m => m.FilteredPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
