import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationPanelComponent } from './navigation-panel.component';

const routes: Routes = [{ path: '', component: NavigationPanelComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationPanelRoutingModule { }
