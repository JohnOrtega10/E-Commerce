import React, { useState, useEffect } from 'react';
import './Home.styles.css'
import Aos from "aos";
import "aos/dist/aos.css"
import {filterCategoriesThunk} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { Link} from 'react-router-dom';

const Home = () => {


    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])

    const dispatch = useDispatch();

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    useEffect(()=>{
        dispatch(filterCategoriesThunk(1))
    }, [dispatch])


    const productsList = useSelector(state=>state.products.productsList)

 
    const [position, setPosition] = useState(0)

    const changeImage = {
        width:productsList.length*100+'%',
        display:'flex',
        transform:`translateX(-${100/productsList.length*position}%)`,
        transition: 'transform .8s ease-in-out'
    }

    return (
        <section className='home-container'>
            <div className='first-slider'>
                <div>
                    <h3 style={{marginTop: '10px', fontSize: '40px'}}>Renew yourself</h3>
                    <p style={{marginTop: '5px'}}>The last pieces to look great</p>
                    <Link to='/shop'><button style={{marginTop: '20px', fontSize:'16px'}}>Buy now</button></Link>
                </div>
            </div>
            
            <div className='information-container' >
                <div>
                    <p>Since 1895, founder Daniel Swarovski's passion for innovation and design and his mastery of cutting crystal have defined us as the leading brand in jewelry and accessories.</p>
                </div>
            </div>
            
            <div className="gallery-container">
                <div data-aos="fade-right"></div>
                <div data-aos="fade-left">
                    <div></div>
                    <div>
                        <Link to='./shop'><button>View more</button></Link>
                    </div>
                </div>
            </div>

            <div className='information-container' >
                <div>
                    <p>We design each of our collections with the intention of creating pieces that can be passed down through generations, with minimal waste and minimal carbon footprint.</p>
                </div>
            </div>
            

            <div className='new-colletion'>
                <div>
                    <div>
                        <div style={changeImage} >
                                
                                {
                                    productsList.map(product=><div style={{width:100+'%'}} key={product.id}> 
                                                                <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                                    <p>{product.name}</p>
                                                                    <img src={product.images[0].url} alt="" style={{width:100+'%'}}/> 
                                                                </Link>
                                                             </div>)
                                }
                        </div> 
                    
                    </div> 
                    <div>
                        <button onClick={()=>setPosition(position-1)} disabled={position===0}><i className="fas fa-caret-square-left fa-3x"></i></button>
                        <button onClick={()=>setPosition(position+1)} disabled={position===productsList.length-1}><i className="fas fa-caret-square-right fa-3x"></i></button>
                    </div>
                </div> 
            </div>


            <div className='categories'   >
       
                    <div className='categories-images'> 
                        <div  className='errings' > 
                            <div></div>
                            <p>Errings</p>
                        </div>
                        <div className='necklaces'   >
                            <div></div>
                            <p>Necklaces</p>
                        </div>
                        <div className='rings' >
                            <div></div>
                            <p>Rings</p>
                        </div>
                        <div className='bracelets'  >
                            <div></div>
                            <p>Bracelets</p>
                        </div>
                    </div>
            </div>

            
            
        </section>
    );
}; 

export default Home;