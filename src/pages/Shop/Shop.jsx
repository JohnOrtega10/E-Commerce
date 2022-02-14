import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {getCategoriesThunk, getProductsListThunk, filterCategoriesThunk, filterNameThunk, selectProduct, setIsModal, addToCartThunk} from '../../redux/actions'
import './Shop.styles.css'


const Shop = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      window.scrollTo(0,0)
    }, [])
 
    useEffect(()=>{
      dispatch(getProductsListThunk())
    }, [dispatch])

    useEffect(()=>{
      dispatch(getCategoriesThunk())
    } , [dispatch]) 

    
    
    const productsList = useSelector(state=>state.products.productsList)
    const categories = useSelector(state=>state.categories.categories)

    const filterProductsCategorie = id =>{
      dispatch(filterCategoriesThunk(id))
    }

    const [search, setSearch] = useState("")
    const [isSearch, setIsSearch] = useState(false)

    const styleSearch = {transform: 'translateY(-200px)'}
      
    const submit = e =>{
      e.preventDefault(); 
      dispatch(filterNameThunk(search))
      setIsSearch(false)
      setSearch('') 
    }

    const [position, setPosition] = useState(0)

    useEffect(()=>{
      setTimeout(() => {
        setPosition(position+1)
      }, 5000);
    }, [position])

  
    return (
        <div className='shop-container'>
 

          <div className='slider-shop'>
            <div className='slider1'>
              <div>
                <p>Jewelry: Bracelets, Earrings, Necklaces, Rings</p>
                <p>Find the best designs to mark your own style</p>
              </div>
            </div>
            <div className='slider2' style={position%2?{opacity: 1}:{opacity: 0}}>
                <div>
                <p>Experts in design and customization</p>
                  <p>Discover our new rings</p>
                </div>
            </div>
          </div>
          
         <div style={{width:'100%'}}>
            <div className='categories-container'>
                  <button onClick={()=>dispatch(getProductsListThunk())}>All</button>
                  {
                    categories.map(categorie=><button key={categorie.id} onClick={()=>filterProductsCategorie(categorie.id)}>{categorie.name}</button>)
                  }

                  <button onClick={()=>setIsSearch(!isSearch)} style={{borderLeft: '1px solid black', paddingLeft: '15px'}}><i className="fas fa-search fa-lg"></i></button>
            </div>
            
              <div className='search-container' style={isSearch?{}:styleSearch}>
                 <button onClick={()=>setIsSearch(false)}><i className="fas fa-times fa-lg"></i></button>
                 
                 <form onSubmit={submit} className='form-search'>
                    <input type="text" value={search} onChange={e=>setSearch(e.target.value)} placeholder='Search a product'/>
                    <button>SEARCH</button>
                  </form>
              </div> 
          </div>
          <p >{productsList.length} results</p>
          
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

export default Shop;