import React from 'react'

class PrintManage extends React.Component {
	render(){
		let { dataContent } = this.props;
		return (<div>
			{ dataContent }
		</div>)
	}
}

export default PrintManage