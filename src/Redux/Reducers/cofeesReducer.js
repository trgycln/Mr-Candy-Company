import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	cofees:[],
	error:false,
	errorMessage:""
}

const coffeesReducer = (state=initialState, action)=>{
	switch (action.type) {
		case ActionTypes.cofeesActions.GET_COFFEES_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.cofeesActions.GET_COFFEES_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				coffes:action.payload,
			}

		case ActionTypes.cofeesActions.GET_COFFEES_FAIL:
			return {
				...state,
				pending:false,
				success:false,
				error:true,
				errorMessage:action.payload
			}
				
		default:
			return state;
	}
}

export default coffeesReducer;