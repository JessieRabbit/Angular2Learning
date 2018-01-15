import {CounterState, INITIAL_COUNTER_STATE} from './counter.store';
import {DECREMENT, INCREMENT, RESET} from './counter.action';
import {Action} from '@ngrx/store';

export function counterReducer(state: CounterState = INITIAL_COUNTER_STATE, action: any): CounterState {
  const {type, payload} = action;

  switch (type) {
    case INCREMENT:
      return {...state, counter: state.counter + payload.value};

    case DECREMENT:
      return {...state, counter: state.counter - payload.value};

    case RESET:
      return INITIAL_COUNTER_STATE;

    default:
      return state;
  }
}