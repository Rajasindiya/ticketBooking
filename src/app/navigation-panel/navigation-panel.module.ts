import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationPanelRoutingModule } from './navigation-panel-routing.module';
import { NavigationPanelComponent } from './navigation-panel.component';


@NgModule({
  declarations: [
    NavigationPanelComponent
  ],
  imports: [
    CommonModule,
    NavigationPanelRoutingModule
  ],
  exports:[
    NavigationPanelComponent
  ]
})
export class NavigationPanelModule { }
