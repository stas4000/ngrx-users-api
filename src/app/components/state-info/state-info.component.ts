import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {data} from '../../shared/interfaces/user-api';

@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.scss']
})
export class StateInfoComponent implements OnInit {

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
