import React, { Component } from 'react';
import Logo from './logo.jpg';
import './Login.scss';
import { Fetch } from '../routes/fetch'
class Login extends Component {
  onLoginEnter(e) {
    if(e.keyCode==13)
      this.onLogin();
  }
  onLogin() {
  	let userName = this.refs.userName.value,
  			passWord = this.refs.passWord.value;
  	if (!userName){
  		alert("请输入用户名！");return;
  	}
  	if (!passWord){
  		alert("请输入密码！");return;
  	}
    Fetch.login({ userName, passWord }).then(back => {
    	let { userid, uiState, userType } = back;
    	localStorage.setItem('user', userName);
    	localStorage.setItem('userid', userid);
	    localStorage.setItem('uiState', uiState);
	    localStorage.setItem('userType',userType);
    	window.location = '.';
    }).catch(err => {
    	alert('登陆失败！');
    	window.location = './login';
    });
  }
  render() {
    return (
      <div className="login-all">
        <div className="login-header"></div>
        <div className="login-viewport">
          <div className="login-top">
          <img className="login-img" src={Logo} width='100%' height='100%'/ >
          </div>
          <input type="text" ref="userName" className="form-control login-text" placeholder="Please enter username" onKeyDown={this.onLoginEnter.bind(this)} />
          <input type="passWord" ref="passWord" className="form-control login-text" placeholder="Password" onKeyDown={this.onLoginEnter.bind(this)} />
          <button type="button" className="btn btn-primary login-text" onClick={this.onLogin.bind(this)}>Login</button>
        </div>
      </div>
    )
  }
}

export default Login
