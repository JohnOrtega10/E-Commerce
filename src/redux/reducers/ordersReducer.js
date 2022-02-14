import {orderActions} from '../actions'


const INITIAL_STATE = {
    orders: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case orderActions.setOrders:
            return {...state, orders: action.payload}
        default:
            return state
    }
   
}

export default reducer;