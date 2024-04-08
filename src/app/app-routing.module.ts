import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockDisplayComponent } from './components/clock-display/clock-display.component';

const routes: Routes = [
  {path: '', redirectTo: 'clock', pathMatch: 'full'},
  {path: 'clock', component : ClockDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
