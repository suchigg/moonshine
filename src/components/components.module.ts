import { NgModule } from '@angular/core';
import { TinderCardComponent } from './tinder-card/tinder-card';
import { IonicModule } from 'ionic-angular';
@NgModule({
	declarations: [TinderCardComponent],
	imports: [
		IonicModule
	],
	exports: [TinderCardComponent]
})
export class ComponentsModule {}
