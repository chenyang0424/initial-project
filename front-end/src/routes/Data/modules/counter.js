// ------------------------------------
// Constants
// ------------------------------------
export const SWITCH_MENU_LIST = 'SWITCH_MENU_LIST'

// ------------------------------------
// Actions
// ------------------------------------
export function switchMenuLists (text) {
  return {
    type    : SWITCH_MENU_LIST,
    text : text
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SWITCH_MENU_LIST]    : (state, action) => {
  	let { text } = action;
  	let dataMenuList = state.dataMenuList.map(each =>
  		(each.text === text ? { ...each, show: true } : { ...each, show: false })
  	);
		return { ...state, dataMenuList };
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
	dataMenuList: [
		{
			text: 'institution',
			show: true,
			dataContent: {
				showDefault: true,
				showAtom: false,
				showMain: false,
				defaultData: [{
					id: '984398jijfwbi',
					institution: '资产雷达',
					atomNumber: 2,
					abbreviation: '雷达',
					type: '贷款公司',
					manager: 'shuai',
					phone: '110'
				},{
					id: '3gr34h4654h5',
					institution: '资产雷达',
					atomNumber: 3,
					abbreviation: '雷达',
					type: '贷款公司',
					manager: 'gfee',
					phone: '15274652882'
				}],
				atomData: {
					institution: 'piangan',
					abbreviation: 'PA',
					parentInstitution: '资产雷达',
					manager: 'shuai',
					phone: '15274652882',
					recordDate: '2017/07/17'
				},
				mainData: {
					institution: '资产雷达',
					abbreviation: '雷达',
					type: '贷款公司',
					manager: 'shuai',
					phone: '15274652882',
					recordDate: '2017/07/17'
				}
			}
		},{
			text: 'protocol',
			show: false,
			dataContent: 'protocol'
		},{
			text: 'business',
			show: false,
			dataContent: 'business'
		},{
			text: 'caseImport',
			show: false,
			dataContent: 'caseImport'
		},{
			text: 'dataEnsure',
			show: false,
			dataContent: 'dataEnsure'
		},{
			text: 'dataUpdate',
			show: false,
			dataContent: 'dataUpdate'
		},{
			text: 'loanRecord',
			show: false,
			dataContent: 'loanRecord'
		},{
			text: 'printManage',
			show: false,
			dataContent: 'printManage'
		}
	],

}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
