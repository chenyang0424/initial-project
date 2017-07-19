import React from 'react'
class Default extends React.Component {
	render(){
		let { defaultData } = this.props;
		return (<div>
			<table className="table table-bordered">
				{ defaultData.map((each, i) => 
		    	<tbody>
					<tr key={i}>
					  <td></td>
					  <td>{ each.institution }</td>
					  <td>{ each.atomNumber }</td>
					  <td>{ each.abbreviation }</td>
					  <td>{ each.type }</td>
					  <td>{ each.manager }</td>
					  <td>{ each.phone }</td>
					</tr>
		    	</tbody>) }
			</table>
		</div>)
	}
}
export default Default