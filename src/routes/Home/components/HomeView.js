import React, { Component } from 'react'
import './HomeView.scss'
import { Fetch } from '../../fetch'
import { url } from '../../../constant/const'

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
		let { queryDataBase_url } = url,
			setState = this.setState,
			{ queryDataBase, PromiseQueue } = Fetch;
		//queryDataBase({ url : queryDataBase_url }, (homeData) => { setState({ homeData }) });
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
