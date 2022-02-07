import * as BenchApiUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

// export const fetchBenches = (filters) => dispatch =>
//     BenchApiUtil.fetchBenches(filters)
//         .then(benches => dispatch(receiveBenches(benches)))

export const fetchBenches = (data) => (dispatch, getState) => {
    return BenchApiUtil.fetchBenches(data).then(benches => dispatch(receiveBenches(benches)))
}