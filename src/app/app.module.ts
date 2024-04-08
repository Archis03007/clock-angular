import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockDisplayComponent } from './components/clock-display/clock-display.component';
import { ChangeDisplayComponent } from './components/change-display/change-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockDisplayComponent,
    ChangeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
