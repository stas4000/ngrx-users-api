import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainStepsModule } from './components/main-steps/main-steps.module';
import { StoreModule } from '@ngrx/store';
import { mainStepsReducer } from './shared/store/main-steps/main-steps.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StateInfoModule } from './components/state-info/state-info.module';
import { userDataReducer } from './shared/store/user-data/user-data.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MainStepsModule,
    StoreModule.forRoot({steps: mainStepsReducer, user: userDataReducer}),
    StateInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
