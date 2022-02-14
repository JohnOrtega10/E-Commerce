import { combineReducers } from "redux";
import productsReducer from "./productsReducer"
import categoriesReducer from "./categoriesReducer"
import cartReducer from "./cartReducer"
import ordersReducer from "./ordersReducer"
import appReducer from './appReducer'

const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    orders: ordersReducer,
    app: appReducer
});

export default rootReducer;