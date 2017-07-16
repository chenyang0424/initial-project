import React, { Component } from 'react'
import AddClient from './AddClient'
class CounterView extends Component {
	componentDidMount(){
		
	}
	render(){
		//action
		let { increment, counter } = this.props;
		//state
		let { doubleAsync } = this.props;
		return(
			<div style={{ margin: '0 auto' }} >
		    <AddClient />
		  </div>)
	}
}

export default CounterView
