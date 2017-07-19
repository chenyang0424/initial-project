import React from 'react'
/*
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
		component = < dataContent={ dataContent }/>;
		break;
		case 'protocol':
		component = < dataContent={ dataContent }/>;
		break;
		case 'business':
		component = < dataContent={ dataContent }/>;
		break;
		case 'caseImport':
		component = < dataContent={ dataContent }/>;
		break;
		case 'dataEnsure':
		component = < dataContent={ dataContent }/>;
		break;
		case 'dataUpdate':
		component = < dataContent={ dataContent }/>;
		break;
		case 'loanRecord':
		component = < dataContent={ dataContent }/>;
		break;
	}
	return component;
}*/
class DataMainWindow extends React.Component {
	render(){
		let { dataContent } = this.props;
		return (<div>
				{ dataContent }
			</div>)
	}
}
export default DataMainWindow
