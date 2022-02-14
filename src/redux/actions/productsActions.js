import axios from "axios"
import { setIsLoading } from "."
import { getConfig } from "../../utils"

export const productsActions = {
    setProductsList: 'SET_PRODUCTSLIST',
    setProduct: 'SET_PRODUCT',
    setIsModal: 'SET_IS_MODAL',
    selectProduct: 'SELECT_PRODUCT'

}

export const setProductsList = productsList => ({
    type: productsActions.setProductsList,
    payload: productsList
})

export const setProduct = product => ({
    type: productsActions.setProduct,
    payload: product
})

export const setIsModal = isModal =>({
    type: productsActions.setIsModal,
    payload: isModal
})

export const selectProduct = product =>({
    type: productsActions.selectProduct,
    payload: product

})

export const getProductsListThunk = ()=>{
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get('https://ecommerce-exercise-backend.herokuapp.com/products/', getConfig() )
             .then(res=>dispatch(setProductsList(res.data)))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}

export const getProductThunk = id =>{
    return dispatch => {
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/${id}/`, getConfig())
             .then(res=>dispatch(setProduct(res.data)))
             .finally(()=>dispatch(setIsLoading(false)))
    }
}

export const filterCategoriesThunk =  id =>{
    return dispatch =>{
        dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
             .then(res=>dispatch(setProductsList(res.data)))
             .finally(()=>dispatch(setIsLoading(false)))
             
    }
}

export const filterNameThunk = search =>{
    return dispatch =>{
        dispatch(setIsLoading(true))
           axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?name__icontains=${search}`, getConfig())
                .then(res=>dispatch(setProductsList(res.data)))
                .finally(()=>dispatch(setIsLoading(false)))
    }
}

export const filterCategoriesDetailThunk = (id, selectedProduct)=>{
    return dispatch => {
        // dispatch(setIsLoading(true))
        axios.get(`https://ecommerce-exercise-backend.herokuapp.com/products/?category=${id}`, getConfig())
                .then(res=>dispatch(setProductsList(res.data.filter(product=>product.id!==selectedProduct))))
                // .finally(()=>dispatch(setIsLoading(false)))
    }
}