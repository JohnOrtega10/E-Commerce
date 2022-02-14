import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductThunk, filterCategoriesDetailThunk, addToCartThunk, selectProduct, setIsModal } from '../../redux/actions';
import './ProductDetail.styles.css'

const ProductDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product = useSelector (state=>state.products.product)
    const productsList = useSelector (state=>state.products.productsList)
    

    useEffect(()=>{
        dispatch(getProductThunk(id))
    }, [dispatch,id])

    useEffect(()=>{ 
        if(product.category){
            dispatch(filterCategoriesDetailThunk(product.category.id, +id))
        }
        
    }, [product, dispatch,id])

    useEffect(()=>{
        window.scrollTo(0,0)
    }, [id])

    const [counter, setCounter] = useState(1);
    const addToCart = ()=>{
        const data = {
                        "product": id,
                        "quantity": counter 
                    }
            
        dispatch(addToCartThunk(data))
    }

    const [position, setPosition] = useState(0)
    const changeImage = {
            width: product.images?.length * 100 + '%',
            transform:`translateX(-${100/product.images?.length*position}%)`
    }

     

    return ( 
        <div>
 
            <div className='slider-detail'>

            </div>

            <div className='details'>
                <div >
                    <div className='slider'>
                        <div className='images-list' style={changeImage}>
                            {
                                product.images?.map(image=><div className='image' style={{width: 100/product.images?.length+'%'}} >
                                                                <img src={image.url} alt="" style={{width:100+'%'}}/>
                                                            </div>)
                            }
                        </div>
                        <div className='buttons-slider'>
                            <button onClick={()=>setPosition(position-1)} disabled={position===0}><i className="fas fa-chevron-left fa-2x"></i></button>
                            <button onClick={()=>setPosition(position+1)} disabled={position===3}><i className="fas fa-chevron-right fa-2x"></i></button>
                        </div>
                    </div>
                </div>
                
                <div className='information'>
                    <h1 style={{marginBottom:' 18px' }}>{product.name}</h1>
                    <h3 style={{marginBottom:' 5px' }}>$ {product.price}</h3>
                    <p style={{marginBottom:' 23px', fontSize: '14px', color: 'gray' }}>Taxes included</p>
                    <p style={{marginBottom:' 23px' }}>{product.description}</p> 
                    <div style={{marginBottom:' 23px' }}>
                        <button onClick={()=>setCounter(counter-1)} disabled={counter===1}><i className="fas fa-minus"></i></button>
                        <p style={{width: '20px'}}>{counter}</p>
                        <button onClick={()=>setCounter(counter+1)}><i className="fas fa-plus"></i></button>
                        <button onClick={()=>{
                            dispatch(selectProduct({...product, quantity:counter}))
                            dispatch(setIsModal(true))
                            addToCart()
                        }}>Add to cart</button>
                    </div>
                </div>
            </div> 
            

            <h2 className='related'>Related products</h2>
            <div className='products-container'> 
              {
                productsList.map(product=>(<div key={product.id} className={'product'}>
                                              
                                                  <img src={product.images[0].url} alt="" />
                                                  <img src={product.images[1].url} alt=""/>
                                                  <div>
                                                    <button onClick={()=>{
                                                      dispatch(selectProduct({...product, quantity: 1}))
                                                      dispatch(setIsModal(true))
                                                      dispatch(addToCartThunk({product: product.id, quantity: 1}))
                                                    }}>Add to cart</button>
                                                    <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}} className='link-detail'  title='view details'><button><i className="far fa-eye"></i></button></Link>
                                                  </div>
                                                  <h4 style={{marginTop:'10px'}}>{product.name}</h4>
                                                  <p style={{margin:'5px', fontSize:'12px', color: 'gray'}}>{product.category.name}</p>
                                                  <p style={{marginBottom:'20px'}}>$ {product.price}</p>
                                            </div>))  
              }
          </div>
 
        </div>
    );
};

export default ProductDetail;