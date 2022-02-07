import * as BenchApiUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

const receiveBenches = benches => ({
    type: RECEIVE_BENCHES,
    benches
});

const receiveBench = bench => ({
    type: RECEIVE_BENCH,
    bench
})

// export const fetchBenches = (filters) => dispatch =>
//     BenchApiUtil.fetchBenches(filters)
//         .then(benches => dispatch(receiveBenches(benches)))

export const fetchBenches = (data) => (dispatch, getState) => {
    return BenchApiUtil.fetchBenches(data).then(benches => dispatch(receiveBenches(benches)))
}

export const createBench = (data) => (dispatch) => {
    return BenchApiUtil.createBench(data).then(bench => dispatch(receiveBench(bench)))
}