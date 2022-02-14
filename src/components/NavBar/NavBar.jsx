import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCartProductsThunk } from '../../redux/actions';
import './NavBar.styles.css'



const NavBar = () => {

    const [changeStyle, setChangeStyle] = useState(false)
    const cartProducts = useSelector(state=>state.cart.cartProducts) 
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartProductsThunk())
    }, [dispatch]) 
    
    
    useEffect(()=>{
        const changeStyleLogo = ()=>{
            if(window.scrollY>1){
                setChangeStyle(true)
            }else{
                setChangeStyle(false)
            } 
        }
        window.addEventListener('scroll', changeStyleLogo)

        return ()=> window.removeEventListener('scroll', changeStyleLogo)
    }, [])



    // const [screenWidth, setScreenWidth] = useState(window.innerWidth)

   

    // useEffect(()=>{
    //     const changeWidth = ()=>{
    //         setScreenWidth(window.innerWidth)
    //     }

    //     window.addEventListener('resize', changeWidth)

    //     return ()=> window.removeEventListener('resize', changeWidth)
    // }, [])

    

    // const [isMobile, setIsMobile] = useState(false)
    return (
        <div className='nav-container'>
               <div className={changeStyle?'nav active':'nav'}>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><b><p>ANISE</p></b></Link>
                <ul>
                    <Link to='/shop' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>SHOP</li></Link>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <Link to='/orders' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>ORDERS</li> </Link>
                </ul>
                <div>
                    <Link to='/cart' style={{ color: 'inherit', textDecoration: 'inherit'}} className='cart-icon'>
                        <i className="fas fa-shopping-bag fa-lg"></i> 
                        <span>{cartProducts.length}</span>
                    </Link>
                </div>  
               
            </div>

            <div className={changeStyle?'inactive':'nav-active-container'}>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><h1 className={changeStyle?'logo active':'logo'}>ANISE</h1></Link>
                <div className ={changeStyle?'inactive-nav':'nav-logo'}>
                    <ul>
                        <Link to='/shop' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>SHOP</li></Link>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                        <Link to='/orders' style={{ color: 'inherit', textDecoration: 'inherit'}}><li>ORDERS</li> </Link>
                        <div style={{marginLeft:'20px'}}>
                            <Link to='/cart' style={{ color: 'inherit', textDecoration: 'inherit'}} className='cart-icon'>
                                <i className="fas fa-shopping-bag fa-lg"></i> 
                                <span style={{left:'12px'}}>{cartProducts.length}</span>
                            </Link>
                        </div>  
                    </ul>
                </div>
            </div>
           
        </div>
    );
};

export default NavBar;