import React from 'react'

class DataEnsure extends React.Component {
	render(){
		let { dataContent } = this.props;
		return (<div>
			{ dataContent }
		</div>)
	}
}

export default DataEnsure