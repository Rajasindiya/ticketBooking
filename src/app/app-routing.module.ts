import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [// { path: 'navigation-panel', loadChildren: () => import('./navigation-panel/navigation-panel.module').then(m => m.NavigationPanelModule) },
  {
    path: 'home',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'busList',
    loadChildren: () =>
      import('./bus-details/bus-details.module').then(
        (m) => m.BusDetailsModule
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
