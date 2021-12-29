import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusDetailsRoutingModule } from './bus-details-routing.module';
import { BusDetailsComponent } from './bus-details.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';


@NgModule({
  declarations: [
    BusDetailsComponent,
    ViewSeatsComponent
  ],
  imports: [
    CommonModule,
    BusDetailsRoutingModule
  ]
})
export class BusDetailsModule { }
