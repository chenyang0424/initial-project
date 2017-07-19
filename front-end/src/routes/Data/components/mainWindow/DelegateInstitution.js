import React from 'react'

class DelegateInstitution extends React.Component {
	render(){
		let { dataContent } = this.props;
		return (<div>
			{ dataContent }
		</div>)
	}
}

export default DelegateInstitution