import React from "react";
import ReactDOM from "react-dom";
import {signup, login, logout} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  window.signup = signup;
});