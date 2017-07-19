import React, { Component } from 'react'

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
		    <h2>Counter: { counter }</h2>
		    <button className='btn btn-default' onClick={ increment }>
		      财务
		    </button>
		    {' '}
		    <button className='btn btn-default' onClick={ doubleAsync }>
		      财务 (Async)
		    </button>
		  </div>)
	}
}


/*
export const CounterView = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

CounterView.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}
*/
export default CounterView
