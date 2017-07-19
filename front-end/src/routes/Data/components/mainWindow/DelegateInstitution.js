import React from 'react'
import Default from './DelegateInstitution/Default'
import Atom from './DelegateInstitution/Atom'
import Main from './DelegateInstitution/Main'

class DelegateInstitution extends React.Component {
	render(){
		let { dataContent : { showDefault, showAtom, showMain, defaultData, atomData, mainData } } = this.props;
		return (<div>
			{ showDefault ? <Default defaultData={ defaultData }/> : null }
			{ showAtom ? <Atom atomData={ atomData }/> : null }
			{ showMain ? <Main mainData={ mainData }/> : null }
		</div>)
	}
}

export default DelegateInstitution