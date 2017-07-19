import React from 'react'

class LoanRecord extends React.Component {
	render(){
		let { dataContent } = this.props;
		return (<div>
			{ dataContent }
		</div>)
	}
}

export default LoanRecord