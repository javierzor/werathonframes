import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame3Page } from './frame3.page';

const routes: Routes = [
  {
    path: '',
    component: Frame3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame3PageRoutingModule {}
