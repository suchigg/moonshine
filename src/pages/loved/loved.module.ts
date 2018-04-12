import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LovedPage } from './loved';

@NgModule({
  declarations: [
    LovedPage,
  ],
  imports: [
    IonicPageModule.forChild(LovedPage),
  ],
})
export class LovedPageModule {}
