import React, { Component } from 'react'
import MenuLists from './MenuLists'
import './data.scss'
import DataMainWindow from './DataMainWindow'
let valueFromKey = (dataMenuList) => {
	for(let { show, dataContent, text } of dataMenuList){
		if(show == true)
			return { dataContent, text };
	}
	throw new error ("No component should be showed.");
}
class CounterView extends Component {
	componentDidMount(){

	}
	render(){
		//state
		let { dataMenuList } = this.props,
		//action
			{ switchMenuLists } = this.props;
		/*let arr = [[showInstitution, DelegateInstitution],
					[showProtocol, DelegateProtocol],
					[showBusiness, DelegateBusiness],
					[showCaseImport, CaseImport],
					[showDataEnsure, DataEnsure],
					[showDataUpdate, DataUpdate],
					[showLoanRecord, LoanRecord],
					[showPrintManage, PrintManage]];*/
		let { dataContent, text } = valueFromKey(dataMenuList);

		return(
		  <div className="row">
		    <div className="col-md-2">
					<div className="menu-frame">
		    		<MenuLists switchMenuLists={ switchMenuLists } menuList={ dataMenuList }/>
					</div>
		  	</div>
		  	<div className="col-md-10" >
					<div className="menu-frame">
		    	<DataMainWindow dataContent={ dataContent } text={ text }/>
		    	</div>
		  	</div>
		  </div>)
	}
}

export default CounterView
