import React, { Component } from 'react'
import { Input } from 'antd'
import 'antd/dist/antd.css'
import 'less'
//import './edit.less'
import { Fetch } from '../../fetch'
class AddClient extends Component {
	onSubmit(){
		let { username : { value : username },
			  identity : { value : identity },
			  address : { value : address },
			  email : { value : email } } = this.refs;
		let value = { username, identity, address, email };
		Fetch.addClientMsg(value).then(data => {console.log(data)});
	}
	render(){
		//action
		let { increment, counter } = this.props;
		//state
		let { doubleAsync } = this.props;
		const inputAry = ["username", "identity", "address", "email"];
		let inputList = inputAry.map((each, i) =>
			(<div key={i}>
				<Input placeholder={each} ref={each}/>
			</div>));
		return (
			<div className="row edit-frame">
				<div className="col-md-4">.col-xs-12 .col-md-8</div>
				<div className="col-md-4">
					{inputList}
				</div>
				<div className="col-md-4">.col-xs-12 .col-md-8</div>
		    </div>)
	}
}

export default AddClient
