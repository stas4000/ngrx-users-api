import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { stepUp, stepDown, reset } from '../../shared/store/main-steps/main-steps.actions';
import { saveUser } from '../../shared/store/user-data/user-data.actions';
import { UserApiUrlService } from '../../shared/services/userl-api.service';
import { UserApi, data } from '../../shared/interfaces/user-api';


@Component({
  selector: 'app-main-steps',
  templateUrl: './main-steps.component.html',
  providers: [UserApiUrlService],
  styleUrls: ['./main-steps.component.scss']
})
export class MainStepsComponent implements OnInit {

  items: MenuItem[];
  activeIndex: number;
  step$: Observable<number>;
  user: data;
  userApiData: UserApi;


  constructor(private store: Store<{ steps: number, user: any }>, private userApiUrlService: UserApiUrlService) {
    this.step$ = store.select('steps');
    store.select('user').subscribe((userData: data) => {
      this.user = userData;
    });
  }

  ngOnInit(): void {
    this.activeIndex = 1;
    this.items = [
      {label: 'Step 1'},
      {label: 'Step 2'},
      {label: 'Step 3'},
      {label: 'Step 4'}
    ];
    this.userApiUrlService.userApi().subscribe((userData: UserApi) => {
      this.userApiData = userData;
    });
  }

  stepUp() {
    this.store.dispatch(stepUp());
  }

  stepDown() {
    this.store.dispatch(stepDown());
  }

  reset() {
    this.store.dispatch(reset());
  }

  saveSelectedToStore(user: data) {
    this.store.dispatch(saveUser({user}))
  }
}
