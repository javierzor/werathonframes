import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame2PageRoutingModule } from './frame2-routing.module';

import { Frame2Page } from './frame2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame2PageRoutingModule
  ],
  declarations: [Frame2Page]
})
export class Frame2PageModule {}
