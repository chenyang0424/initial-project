import React, { Component } from 'react'
import './HomeView.scss'

class HomeView extends Component {
	componentWillReceiveProps(){
		alert(2);
	}
	render() {
		return (
		  <div>
		    <h4>Welcome!</h4>
		  </div>)
	}
}
export default HomeView
