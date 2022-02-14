import axios from "axios"
import { getConfig } from "../../utils"

export const userActions = {
    setUser: 'SET_USER'
}

export const setUser = user =>({
    type: userActions.setUser,
    payload: user
})


export const getUserThunk = ()=>{
    return dispatch =>{
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/users/67/')
    }
}

export const createUserThunk = data =>{
    return dispatch =>{
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/users/', data, getConfig())
             .then(res => console.log(res.data))
    }
}

