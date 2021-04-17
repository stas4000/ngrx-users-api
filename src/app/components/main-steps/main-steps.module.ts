import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainStepsComponent } from './main-steps.component';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NestedStepComponent } from './nested-step/nested-step.component';



@NgModule({
  declarations: [
    MainStepsComponent,
    NestedStepComponent
  ],
  imports: [
    CommonModule,
    StepsModule,
    ButtonModule,
    ScrollingModule,
    DataViewModule
  ]
})
export class MainStepsModule { }
