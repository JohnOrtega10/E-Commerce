import axios from "axios"
import { useDispatch } from "react-redux"
import { getConfig } from "../../utils"
import { setProductsList } from "./"
import { setIsLoading } from "./appActions";

// const dispatch = useDispatch();

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

