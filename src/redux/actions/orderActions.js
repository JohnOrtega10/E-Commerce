import { getConfig } from "../../utils"
import axios from "axios"
import { setIsLoading } from "."

export const orderActions = {
    setOrders: 'SET_ORDERS'
} 

export const setOrders = orders => ({
    type: orderActions.setOrders,
    payload: orders
})

export const getOrdersThunk = () =>{
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/orders/', getConfig())
             .then(res => dispatch(setOrders(res.data)))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}