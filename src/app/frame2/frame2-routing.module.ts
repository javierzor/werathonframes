import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Frame2Page } from './frame2.page';

const routes: Routes = [
  {
    path: '',
    component: Frame2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Frame2PageRoutingModule {}
