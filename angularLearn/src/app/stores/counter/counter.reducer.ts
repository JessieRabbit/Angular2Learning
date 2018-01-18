import { CounterState, INITIAL_COUNTER_STATE } from './counter.store';
import { DECREMENT, INCREMENT, RESET } from './counter.action';
import { Action } from '@ngrx/store';

export function counterReducer(state: CounterState = INITIAL_COUNTER_STATE, action: Action) {
  const { type } = action;
  console.log('HAHA');
  switch (type) {
    case INCREMENT:
      console.log('+');
      return { ...state, counter: state.counter + 1 };

    case DECREMENT:
      console.log('-');
      return { ...state, counter: state.counter - 1 };

    case RESET:
      console.log('reset');
      return INITIAL_COUNTER_STATE;

    default:
      console.log('default');
      return state;
  }
}
