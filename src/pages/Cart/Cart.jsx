import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProductsThunk, removeCartProductThunk, changeQuantityProductThunk, buyProductsCarThunk} from '../../redux/actions';
import './Cart.styles.css'

const Cart = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])


    const dispatch = useDispatch()
 
    const cartProducts = useSelector(state=>state.cart.cartProducts.sort( ( a, b ) => b.id - a.id))


    useEffect(()=>{
        dispatch(getCartProductsThunk())
    }, [dispatch])

    const changeQuantity = (id,quantity)=>{
        const totalQuantity = {quantity}
        dispatch(changeQuantityProductThunk(id, totalQuantity))
    }

    const [total, setTotal] = useState(0); 

    useEffect(()=>{
        let subtotal = 0
        cartProducts.forEach(product => {
            subtotal+= +product.product.price* +product.quantity
        });
        setTotal(subtotal)
    }, [cartProducts])

    return (   
        <div className='cart-container'>
            <div className='slider-cart'></div>
            <div>
                <h1>Shopping Cart</h1>
                <p>Products in cart: ({cartProducts.length})</p>
            </div>
            
            {
                cartProducts.length?(<div className='cart-products-container'>
                                            <div className='cart-products'>
                                                {
                                                    cartProducts.map(product=>(<div key={product.id} >
                                                                                        <div>
                                                                                            <img src={product.product.images[0].url} alt=""/>
                                                                                        </div>
                                                                                        <div> 
                                                                                            <h4>{product.product.name}</h4>
                                                                                            <p style={{marginTop:  '10px'}}>${product.product.price*product.quantity}</p>
                                                                                            <p style={{marginTop:  '10px', fontSize: '11px'}}>{product.product.description}</p>
                                                                                            <div  style={{marginTop:  '30px'}}>
                                                                                                <button onClick={()=>dispatch(removeCartProductThunk(product.id))}><i className="fas fa-trash"></i></button>
                                                                                                <div>
                                                                                                    <button onClick={()=>changeQuantity(product.id, product.quantity-1)} disabled={product.quantity===1}><i className="fas fa-minus"></i></button>
                                                                                                      {product.quantity}
                                                                                                    <button onClick={()=>changeQuantity(product.id, product.quantity+1)}><i className="fas fa-plus"></i></button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                </div>))
                                                }
                                            </div>
                                                <div className='total-container'>   
                                                    <div>
                                                        <h2 style={{textAlign:'center'}}>My cart</h2>
                                                        <div style={{marginTop:'20px', borderTop: '1px solid rgb(164,149,149',  paddingTop: '8px', color:'rgb(164,149,149)'}}><p>Subtototal</p><p>${total}</p></div>
                                                        <div style={{color:'rgb(164,149,149)'}}><p>Discount</p><p>$0</p></div>
                                                        <div style={{marginTop:'20px', borderTop: '1px solid rgb(164,149,149', paddingTop: '8px', fontSize:'18px'}}><b><p>Total</p></b><p>${total}</p></div>
                                                        <button onClick={()=>dispatch(buyProductsCarThunk())}style={{fontSize:'16px'}} >Buy</button> 
                                                    </div>
                                                    
                                                </div>
                                            </div>

                                    ):(
                                        <div className='continue-shopping'>
                                            <p style={{marginTop: '50px'}}>You have nothing in your shopping cart.</p>
                                            <Link to='/shop' ><button style={{marginTop: '10px'}}>Continue Shopping</button></Link>
                                        </div>
                                    )
            }
           
                    
    
               
                    

             
                
            
        </div>
    );
};

export default Cart; 