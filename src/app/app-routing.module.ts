import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainStepsComponent} from './components/main-steps/main-steps.component';
import {StateInfoComponent} from './components/state-info/state-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-steps', pathMatch: 'full' },
  { path: 'main-steps', component: MainStepsComponent },
  { path: 'state-page', component: StateInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
