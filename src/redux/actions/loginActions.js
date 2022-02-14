import axios from "axios";

export const loginThunk = (data)=>{
    return dispatch => {
       return axios.post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
                   .then(res=>localStorage.setItem('token', res.data.access))
                   .catch(()=>localStorage.setItem('token', ""))
    }
} 
 
