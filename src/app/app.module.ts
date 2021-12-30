import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusService } from './bus.service';
import { HomePageModule } from './home-page/home-page.module';
import { NavigationPanelModule } from './navigation-panel/navigation-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavigationPanelModule,
    HomePageModule
  ],
  providers: [BusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
