import { connect } from "react-redux";
import { fetchBenches } from "../../actions/bench_actions";
import { updateFilter } from "../../actions/filter_actions";
import Search from './search'

const mstp = (state) => ({
    benches: Object.values(state.entities.benches),
    filters: Object.values(state.ui.filters)
});

const mdtp = dispatch => ({
    // fetchBenches: (filters) => dispatch(fetchBenches(filters)),
    // updateBounds: bounds => dispatch(updateBounds(bounds))
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mstp, mdtp)(Search);

