import { createReducer, on } from '@ngrx/store';
import { saveUser } from './user-data.actions';

export const initialState = null;

const _userDataReducer = createReducer(
  initialState,
  on(saveUser, (state, { user }) => user),
);

export function userDataReducer(state, action) {
  return _userDataReducer(state, action);
}
