import React from 'react';
import { Link } from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.upcase = this.upcase.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  renderErrors() {
    if (this.props.errors.length === 0){
        return [];
    } 
    return (
        <ul>
            {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                    {error}
                </li>
            ))}
        </ul>
        )    
    }

    upcase(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

  render() {

    return (
      <div>
        <h2>{this.upcase(this.props.formType)}</h2>
        <form>
        <div className="errors">{this.renderErrors()}</div>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.handleChange('username')} />
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.handleChange('password')} />
          </label>
          <input type="submit" value={this.upcase(this.props.formType)} onClick={this.handleSubmit}/>
          {this.props.formType === 'login' ? <Link to='/signup' /> : <Link to='/login' />}
        </form>
      </div>
    )
  }
}

export default SessionForm;