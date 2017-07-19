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
			dataContent: 'institution'
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
		}
	],

}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
