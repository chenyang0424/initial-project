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
		queryDataBase().then((homeData) => { setState({ homeData }) });
		
		
		/*fetch('http://localhost:8081/getData', {
			mode: 'no-cores'
		})//.then(res => res.json())
		.then(res => {
			//if(res.success === true)
				console.log(res, res.body);
		});*/
		
		
	}
	render() {
		let { homeData : { init } } = this.state;
		return (
		  <div style={{width:"50%",margin:"0 auto",height:"500px"}}>
		    <h4>欢迎登陆XX催收系统!</h4>
		  </div>)
	}
}
export default HomeView
