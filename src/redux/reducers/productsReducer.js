import { productsActions } from "../actions"; 

const INITIAL_STATE = {
    productsList: [],
    product: {},
    isModal: false,
    productSelected: {},
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case productsActions.setProductsList:
            return {...state, productsList: action.payload}
        
        case productsActions.setProduct:
            return {...state, product: action.payload}

        case productsActions.setIsModal:
            return {...state, isModal: action.payload}

        case productsActions.selectProduct:
            return {...state,productSelected: action.payload}

        default:
            return state
    }

    
}

export default reducer;