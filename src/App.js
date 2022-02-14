import './App.css';
import {  HashRouter, Route, Routes} from 'react-router-dom'
import {Login, Shop, Cart, ProductDetail, Orders, Signup, Home} from './pages'
import {Loading, MainLayout, Modal, ProtectedRoutes } from './components'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const isModal = useSelector(state=>state.products.isModal)
  const isLoading = useSelector(state=>state.app.isLoading)

  useEffect(()=>{
    if(isModal){
      document.body.style.overflowY = 'hidden'
    }else{
      document.body.style.overflowY = 'scroll';
    }  
  }
  , [isModal])
  
  return (

    <HashRouter>
      {isModal&&<Modal/>}
      {isLoading&&<Loading/>}
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        
        <Route element={<ProtectedRoutes/>}>
            <Route element={<MainLayout/>}>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/product/:id' element={<ProductDetail/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/orders' element={<Orders/>}/>               
                <Route path='/' element={<Home/>}/>
            </Route>
        </Route>
      </Routes>
    </HashRouter>

  
  );
}

export default App;
