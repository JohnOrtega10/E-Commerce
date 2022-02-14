import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUserThunk } from '../../redux/actions';
import './Signup.styles.css'

const Signup = () => { 
    const navigate = useNavigate()

    const {handleSubmit, register} = useForm();
    const dispatch = useDispatch();


    const submit = data =>{
        dispatch(createUserThunk(data))
        navigate('/login')
    }

    return (
        <div className='signup-container'>
            <div className='signup'>
 
            
            <h1>ANISE</h1>

            <form onSubmit={handleSubmit(submit)}>
                <div className='names'>
                    <div className="input-container" style={{width:'48%'}}>
                        <label htmlFor="first_name">First Name</label>
                        <input type="text" 
                               id='first_name' 
                               placeholder='John'
                               {...register('first_name')} 
                               required 
                               />
                    </div>

                    <div className="input-container" style={{width:'48%'}}>
                        <label htmlFor="last_name">Last Name</label>
                        <input type="text" 
                               id='last_name'  
                               {...register('last_name')}  
                               placeholder='Doe' 
                               required/>
                    </div>

                </div>
                

                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                           id='email' 
                           placeholder='admin@admin.com '
                           {...register('email')} 
                           required/>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           id='password'  
                           placeholder='password'
                           

                           required/>
                </div>
                <button>Signup</button>
            </form>

                <p>Already have an account?<Link to='/login' style={{color: 'inherit'}}> Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;