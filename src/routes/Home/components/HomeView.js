import React, { Component } from 'react'
import './HomeView.scss'
import { Fetch } from '../../fetch'

class HomeView extends Component {
	constructor(props){
		super(props);
		this.state = {
			homeData : ""
		}
	}
	componentWillMount(){
		let { route : { homeData = "initial" } } = this.props;
		this.setState({ homeData });
	}
	componentDidMount(){
		let setState = this.setState,
			{ queryDataBase, PromiseQueue } = Fetch;
		//queryDataBase().then((homeData) => { setState({ homeData }) });
	}
	render() {
		let { homeData : { init } } = this.state;
		return (
		  <div>
		    <h4>Welcome!</h4>
		    <h4>{ init }!</h4>
		  </div>)
	}
}
export default HomeView
