import { createReducer, on } from '@ngrx/store';
import { stepUp, stepDown, reset } from './main-steps.actions';

export const initialState = 0;

const _mainStepsReducer = createReducer(
  initialState,
  on(stepUp, (state) => state < 3 ? state + 1 : state),
  on(stepDown, (state) => state > 0 ? state - 1 : state),
  on(reset, (state) => 0)
);

export function mainStepsReducer(state, action) {
  return _mainStepsReducer(state, action);
}
