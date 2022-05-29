import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame4PageRoutingModule } from './frame4-routing.module';

import { Frame4Page } from './frame4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame4PageRoutingModule
  ],
  declarations: [Frame4Page]
})
export class Frame4PageModule {}
