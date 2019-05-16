import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocateOnMapComponent } from './locate-on-map/locate-on-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LocateOnMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
