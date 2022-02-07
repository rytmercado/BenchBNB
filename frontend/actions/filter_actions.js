import { fetchBenches } from './bench_actions';
export const UPDATE_FILTERS = 'UPDATE_FILTERS'

export const changeFilter = (filter, value) => (
    {
        type: UPDATE_FILTERS,
        filter,
        value
    }
)
export function updateFilter(filter, value) {
    return (dispatch, getState) => {
      dispatch(changeFilter(filter, value));
      return fetchBenches(getState().ui)(dispatch);
      // delicious curry!
    };
  }