import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export function updateFilterThunk(filter, value) {
  return (dispatch, getState) => {
    dispatch(updateFilter(filter, value));
    return fetchBenches(getState().filters)(dispatch);
    // delicious curry!
  };
}
