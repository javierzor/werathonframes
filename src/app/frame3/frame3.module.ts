import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Frame3PageRoutingModule } from './frame3-routing.module';

import { Frame3Page } from './frame3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Frame3PageRoutingModule
  ],
  declarations: [Frame3Page]
})
export class Frame3PageModule {}
