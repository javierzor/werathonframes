import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame4Page } from './frame4.page';

const routes: Routes = [
  {
    path: '',
    component: Frame4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame4PageRoutingModule {}
