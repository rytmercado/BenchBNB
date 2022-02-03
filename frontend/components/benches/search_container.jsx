import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { updateBounds } from "../../actions/filter_actions";
import Search from './search'

const mstp = (state) => ({
    benches: Object.values(state.entities.benches),
});

const mdtp = dispatch => ({
    fetchBenches: () => dispatch(fetchBenches()),
    updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(mstp, mdtp)(Search);

