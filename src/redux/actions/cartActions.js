import axios from "axios"
import { setIsLoading } from "."
import { getConfig } from "../../utils"


export const cartActions = {
    setCartProducts: 'SET_CARTPRODUCTS'
}

export const setProductsCart = cartProducts => ({
    type: cartActions.setCartProducts,
    payload: cartProducts
})



export const getCartProductsThunk = () => {
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/cart/', getConfig())
              .then(res=>dispatch(setProductsCart(res.data)))
              .finally(()=>dispatch(setIsLoading(false)))
    }
}


export const addToCartThunk = data =>{
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/products/add_to_cart/', data, getConfig())
             .then(()=>dispatch(getCartProductsThunk()))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}

export const removeCartProductThunk = id =>{
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.delete(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/remove_item/`, getConfig())
             .then(()=>dispatch(getCartProductsThunk()))
             .catch(()=>console.log('error'))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}

export const changeQuantityProductThunk = (id, quantity) =>{
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.put(`https://ecommerce-exercise-backend.herokuapp.com/cart/${id}/change_quantity/`,quantity,getConfig())
             .then(()=>dispatch(getCartProductsThunk()))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}

export const buyProductsCarThunk = () =>{
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/cart/buy/',{}, getConfig())
             .then(()=>dispatch(getCartProductsThunk()))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}