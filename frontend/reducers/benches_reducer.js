import { RECEIVE_BENCHES, RECEIVE_BENCH } from "../actions/bench_actions";

const benchesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);


  switch (action.type) {
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      newState[action.bench.id] = action.bench;
      return newState;
    default:
      return state;
  }
};

export default benchesReducer;