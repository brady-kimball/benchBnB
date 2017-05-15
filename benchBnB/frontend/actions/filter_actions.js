export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
import { fetchBenches } from './bench_actions';

export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export function updateBoundsThunk(bounds) {
  return (dispatch, getState) => {
    dispatch(updateBounds(bounds));
    return fetchBenches(getState().filters)(dispatch);
    // delicious curry!
  };
}
