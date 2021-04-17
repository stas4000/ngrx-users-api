import { createAction, props } from '@ngrx/store';
import {data} from '../../interfaces/user-api';

export const saveUser = createAction('[UserData] Save User', props<{ user: data }>());
