import React, { Component } from 'react';
//import patsLogo from './images/pats-logo.png';
import './Login.scss';

class Login extends Component {
  sendFetch(){

  }
  onLoginEnter(e) {
    if(e.keyCode==13)
      this.sendFetch();
  }
  onLogin() {
    this.sendFetch();
  }
  render() {
    return (
      <div className="login-all">
        <div className="login-header"></div>
        <div className="login-viewport">
          <div className="login-top">
            {/*<span className="logo-span"></span>*/}
         { /* <img className="login-img" src=dbsLogo ></img>*/}
          </div>
          <input type="text" ref="userName" className="form-control login-text" placeholder="Please enter username" onKeyDown={this.onLoginEnter.bind(this)} />
          <input type="passWord" ref="passWord" className="form-control login-text" placeholder="Password" onKeyDown={this.onLoginEnter.bind(this)} />
          <button type="button" className="btn btn-default login-text bg-color" onClick={this.onLogin.bind(this)}>Login</button>
          {/*<button type="button" className="btn btn-default login-text bg-color">Exit</button>*/}
        </div>
      </div>
    )
  }
}

export default Login
