import React, { Component } from 'react'
import MenuLists from './MenuLists'
import DelegateInstitution from './DelegateInstitution'
import DelegateProtocol from './DelegateProtocol'
import DelegateBusiness from './DelegateBusiness'
import CaseImport from './CaseImport'
import DataEnsure from './DataEnsure'
import DataUpdate from './DataUpdate'
import LoanRecord from './LoanRecord'
import PrintManage from './PrintManage'

let valueFromKey = (map, data) => {
	for(let [key, value] of map){
		if(key == true)
			return <value data={data} />;
	}
	return false;
}
class CounterView extends Component {
	componentDidMount(){

	}
	render(){
		let { showInstitution, showProtocol, showBusiness, showCaseImport,
			showDataEnsure, showDataUpdate, showLoanRecord, showPrintManage } = this.props,
			{ data } = this.props;
		let arr = [[showInstitution, DelegateInstitution],
					[showProtocol, DelegateProtocol],
					[showBusiness, DelegateBusiness],
					[showCaseImport, CaseImport],
					[showDataEnsure, DataEnsure],
					[showDataUpdate, DataUpdate],
					[showLoanRecord, LoanRecord],
					[showPrintManage, PrintManage]];
		let rightFrame = valueFromKey(arr, data);
		
		let { doubleAsync } = this.props;
		return(
		  <div className="row data-frame">
		    <div className="col-md-3" >
		    	<MenuLists />
		  	</div>
		  	<div className="col-md-9" >
		    	{ rightFrame }
		  	</div>
		  </div>)
	}
}

export default CounterView
