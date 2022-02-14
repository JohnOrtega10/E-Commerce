import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsModal } from '../../redux/actions';
import './Modal.styles.css'
import Aos from "aos";
import "aos/dist/aos.css"

const Modal = () => { 

    const dispatch = useDispatch()
    const product = useSelector(state=>state.products.productSelected)

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
  
    return (
        <div className='overlay-modal' >

            <div className='modal' data-aos="zoom-in" data-aos-duration="500">
                <div style={{borderBottom: '1px solid #C4262E'}}> 
                    <div style={{displa:'flex', alignItems:'center'}}>
                        <i className="fas fa-check-square fa-2x" style={{color:'#C4262E'}}></i>
                        <p style={{marginLeft:'20px'}}>Your product has been successfully added to the cart</p>
                    </div>
                    <button onClick={()=>dispatch(setIsModal(false))} style={{position:'relative', top:'-5px', right:'5px'}}><i className="fas fa-times fa-lg"></i></button> 
                </div>
                    
                <div className='modal-information'>
                    <div>
                        <img src={product.images[0].url} alt=""/>
                    </div>
                    <div>
                        <h4 style={{fontSize: '22px'}}>{product.name}</h4>
                        <p style={{marginTop:  '20px', fontSize: '12px', color:'gray'}}>{product.description}</p>
                        <p style={{marginTop:  '10px', fontSize: '13px', color:'gray'}}>Quantity: {product.quantity}</p>
                        <p style={{marginTop:  '10px'}}>${product.price}</p>  
                    </div>
                    <div>
                        <Link to='/cart' style={{ color: 'inherit', textDecoration: 'inherit', width:'100%', display:'flex', justifyContent: 'center'}}><button onClick={()=>dispatch(setIsModal(false))}> <i className="fas fa-shopping-bag"></i><p style={{marginLeft:'10px'}}> Go to cart</p></button></Link>
                        <button onClick={()=>dispatch(setIsModal(false))} >Continue buying</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;