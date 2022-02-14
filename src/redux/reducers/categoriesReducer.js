import {actions} from '../actions'


const INITIAL_STATE = {
    categories: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.setCategories:
            return {...state, categories: action.payload}
        default:
            return state
    }
}

export default reducer;