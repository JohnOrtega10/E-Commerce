import { cartActions } from '../actions';

const INITIAL_STATE = {
    cartProducts: []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActions.setCartProducts:
            return {...state, cartProducts: action.payload}
        default:
            return state
    }
}

export default reducer;