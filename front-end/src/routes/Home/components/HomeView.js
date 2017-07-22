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
		let setState = this.setState, { queryDataBase, PromiseQueue } = Fetch;
		queryDataBase().then((homeData) => { console.log( homeData ) });
	}
	render() {
		let { homeData : { init } } = this.state;
		return (
		  <div style={{width:"35%",margin:"100px auto",height:"500px"}}>
		    <h4 style={{margin:"2em 0"}}>欢迎登陆XXXX系统!</h4>
		    <table className="table table-bordered">
		    	<tbody>
					  <tr>
					  	<td width="20%">用户姓名:</td>
					  	<td></td>
					  </tr>
					  <tr>
					  	<td>用户类型:</td>
					  	<td></td>
					  </tr>
					  <tr>
					  	<td>用户ID:</td>
					  	<td></td>
					  </tr>
		    	</tbody>
				</table>
		  </div>)
	}
}
export default HomeView
