import { RECEIVE_ERRORS,
         RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from 'lodash';


const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, {currentUser});
    case RECEIVE_ERRORS:
      let errors = action.errors;
      return merge({}, state, {errors});
    default:
      return state;
  }
};

export default SessionReducer;
