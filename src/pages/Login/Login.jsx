import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/actions';
import './Login.styles.css'

const Login = () => {

    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const submit = data =>{
        axios.post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
                .then(res=>{localStorage.setItem('token', res.data.access)
                            navigate('/');})
                .catch(()=>localStorage.setItem('token', ""))
    }  


    return (
        <div className='login-container'>
            <div className='login'>

                    <h1>ANISE</h1>
                    <div className='test'>
                        <h4>Test data</h4>
                        <p><i className="fas fa-user"></i>admin@admin.com</p>
                        <p><i className="fas fa-lock"></i>root</p>
 
                    </div>
                    <div className='form-login' >    
                        <form onSubmit={handleSubmit(submit)} style={{width:'100%'}}>
                            <div className='input-login'>
                                <label htmlFor="email">Enter your email</label>
                                <input type="email" 
                                       id='email' 
                                       placeholder='john@gmail.com' 
                                       {...register("email")} 
                                       required/>
                            </div>
                            <div className='input-login'>
                                <label htmlFor="password">Enter your password</label>
                                <input type="password" 
                                       id='password'
                                       placeholder='password'
                                       {...register("password")} 
                                       required/>
                            </div>
                            
                            
                            <button>Login</button>
                        </form>
                    </div>
                    <p>Don't have an account? <Link to='/signup' style={{ color: 'inherit'}} >Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;