import { connect } from 'react-redux';
import {logout, login, signup} from '../../actions/session_actions';
import Greeting from './greeting';

const mstp = ({entities, session}) => ({
  user: entities.users[session.id],
});

const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
});

export default connect(mstp, mdtp)(Greeting);