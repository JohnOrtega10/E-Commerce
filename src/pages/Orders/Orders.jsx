import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getOrdersThunk } from '../../redux/actions';
import './Orders.styles.css'

const Orders = () => {
    const orders = useSelector(state=>state.orders.orders)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOrdersThunk())
    }, [])

    
    return (
        <div>
            <div className='orders-slider'>

            </div>


            {
                orders.map(order=>(<div key={order.id}>
                                        <h3>{order.product.name}</h3>
                                        <img src={order.product.images[0].url} alt="" style={{width: '200px'}}/>
                                        <p>{order.purchase_date}</p>
                                   </div>))
            }
        </div>
    );
};

export default Orders; 