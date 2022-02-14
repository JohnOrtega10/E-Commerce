import { appActions } from "../actions";

const INITIAL_STATE = {
    isLoading: false,
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case appActions.setIsLoading:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
   
}

export default reducer;