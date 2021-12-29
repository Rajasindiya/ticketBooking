import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailsComponent } from './bus-details.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';

const routes: Routes = [{ path: '', component: BusDetailsComponent },
{path:'seat',component:ViewSeatsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusDetailsRoutingModule { }
