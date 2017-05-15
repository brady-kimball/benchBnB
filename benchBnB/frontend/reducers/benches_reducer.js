import { RECEIVE_BENCHES } from '../actions/bench_actions';

const benchesReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({}, action.benches);
    default:
      return state;
  }
};

export default benchesReducer;
