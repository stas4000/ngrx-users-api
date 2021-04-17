import { createAction } from '@ngrx/store';

export const stepUp = createAction('[MainSteps] Step Up');
export const stepDown = createAction('[MainSteps] Step Down');
export const reset = createAction('[MainSteps] Reset');
