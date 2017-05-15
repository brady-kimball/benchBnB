import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const benchesReducer = (state={}, action) => {
  switch(action.type) {
    case RECEIVE_BENCHES:
      return Object.assign({}, action.benches);
    case RECEIVE_BENCH:
      let newBench = {[action.bench.id]: action.bench}
      return Object.assign({}, state, newBench);
    default:
      return state;
  }
};

export default benchesReducer;
