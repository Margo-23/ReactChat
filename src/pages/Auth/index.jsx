import { render } from '@testing-library/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';


import {LoginForm, RegisterForm} from '../../modules';
import './Auth.scss';




function Auth() {

  return (
    <section className='auth'>
      <div className="auth__content">    

      <Routes>
    <Route exact path='/' element={<LoginForm />}></Route>
    <Route path='/register' element={<RegisterForm/>}></Route>

      </Routes>

    

      </div>
    </section>
  )
}




export default Auth;