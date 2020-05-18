import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilteredPage } from './filtered.page';

const routes: Routes = [
  {
    path: '',
    component: FilteredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteredPageRoutingModule {}
