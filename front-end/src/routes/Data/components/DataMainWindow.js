import React from 'react'

import DelegateInstitution from './mainWindow/DelegateInstitution'
import DelegateProtocol from './mainWindow/DelegateProtocol'
import DelegateBusiness from './mainWindow/DelegateBusiness'
import CaseImport from './mainWindow/CaseImport'
import DataEnsure from './mainWindow/DataEnsure'
import DataUpdate from './mainWindow/DataUpdate'
import LoanRecord from './mainWindow/LoanRecord'
import PrintManage from './mainWindow/PrintManage'

let mainWindow = (title, dataContent) => {
	var component;
	switch(title){
		case 'institution':
		component = <DelegateInstitution dataContent={ dataContent }/>;
		break;
		case 'protocol':
		component = <DelegateProtocol dataContent={ dataContent }/>;
		break;
		case 'business':
		component = <DelegateBusiness dataContent={ dataContent }/>;
		break;
		case 'caseImport':
		component = <CaseImport dataContent={ dataContent }/>;
		break;
		case 'dataEnsure':
		component = <DataEnsure dataContent={ dataContent }/>;
		break;
		case 'dataUpdate':
		component = <DataUpdate dataContent={ dataContent }/>;
		break;
		case 'loanRecord':
		component = <LoanRecord dataContent={ dataContent }/>;
		break;
		case 'printManage':
		component = <PrintManage dataContent={ dataContent }/>;
		break;
	}
	return component;
}
class DataMainWindow extends React.Component {
	render(){
		let { dataContent, text } = this.props;
		return (<div>
				{ mainWindow(text, dataContent) }
			</div>)
	}
}
export default DataMainWindow
