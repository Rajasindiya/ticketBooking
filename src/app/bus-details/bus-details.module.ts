import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusDetailsRoutingModule } from './bus-details-routing.module';
import { BusDetailsComponent } from './bus-details.component';
import { FindSeatComponent } from './find-seat/find-seat.component';


@NgModule({
  declarations: [
    BusDetailsComponent,
    FindSeatComponent
  ],
  imports: [
    CommonModule,
    BusDetailsRoutingModule
  ]
})
export class BusDetailsModule { }
