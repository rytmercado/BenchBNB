import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component{
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();  
  }

  render() {
    return (this.props.user ? (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <button onClick={this.handleLogout}>Log out</button>
      </div>
    ) : (
      <div>
        <Link to='/login'>Log in</Link>
        {' or '}
        <Link to='/signup'>Sign up!</Link>
      </div>
    ));
  }
};

export default Greeting;