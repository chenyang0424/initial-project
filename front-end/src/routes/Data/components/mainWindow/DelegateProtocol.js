import React from 'react'

class DelegateProtocol extends React.Component {
	render(){
		let { dataContent } = this.props;
		return (<div>
			{ dataContent }
		</div>)
	}
}

export default DelegateProtocol