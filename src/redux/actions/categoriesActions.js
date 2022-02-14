import axios from "axios"
import { getConfig } from "../../utils"
import { setIsLoading } from "./appActions";



export const actions = ({
    setCategories: 'SET_CATEGORIES',
})

export const setCategories = (categories)=>({
    type: actions.setCategories,
    payload: categories
})

export const getCategoriesThunk = ()=>{
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/categories/', getConfig())
             .then(res=>dispatch(setCategories(res.data)))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}

