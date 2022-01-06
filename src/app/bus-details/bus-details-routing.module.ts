import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailsComponent } from './bus-details.component';
import { BusResolverResolver } from './bus-resolver.resolver';
import { FindSeatComponent } from './find-seat/find-seat.component';

const routes: Routes = [{ path: '', component: BusDetailsComponent,resolve:{buses:BusResolverResolver}},
{path:'seat',component:FindSeatComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusDetailsRoutingModule { }
