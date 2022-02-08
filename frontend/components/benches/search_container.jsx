import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import Search from './search'

const mstp = (state) => ({
    benches: Object.values(state.entities.benches),
    filters: state.ui.filters
});

const mdtp = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mstp, mdtp)(Search);

