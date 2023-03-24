import ActionTypes from "../Actions/ActionTypes";


const initialState = {
	pending:true,
	success:false,
	equipments:[],
	error:false,
	errorMessage:""
}

const equipmentsReducer = (state=initialState, action)=>{
	switch (action.type) {
		case ActionTypes.equipmentsActions.GET_EQUİPMENTS_START:
			return{
				...state,
				pending:true
			}
		
		case ActionTypes.equipmentsActions.GET_EQUİPMENTS_SUCCESS:
			return {
				...state,
				pending:false,
				success:true,
				equipments:action.payload,
			}

		case ActionTypes.equipmentsActions.GET_EQUİPMENTS_FAIL:
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

export default equipmentsReducer;