import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './benches/search_container';
import BenchFormContainer from './benches/bench_form_container';
import {Route, Link} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';


const App = () => (
  <div>
    <header>
      <Link 
        to='/'
        className='header-link'
        >Bench BnB
      </Link>
      <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} /> 
    <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
    <Route exact path="/" component={SearchContainer} />
  </div>
);

export default App;