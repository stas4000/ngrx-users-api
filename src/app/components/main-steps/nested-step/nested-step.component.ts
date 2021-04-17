import { Component, OnInit } from '@angular/core';
import {data} from '../../../shared/interfaces/user-api';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nested-step',
  templateUrl: './nested-step.component.html',
  styleUrls: ['./nested-step.component.scss']
})
export class NestedStepComponent implements OnInit {

  step$: Observable<number>;
  user: data;


  constructor(private store: Store<{ steps: number, user: any }>) {
    this.step$ = store.select('steps');
    store.select('user').subscribe((userData: data) => {
      this.user = userData;
    });
  }

  ngOnInit(): void {
  }

}
