import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';
import benchesReducer from './benches_reducer';
import filterReducer from './filter_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  benches: benchesReducer,
  filters: filterReducer
});

export default rootReducer;
