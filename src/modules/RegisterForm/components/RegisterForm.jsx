import React from 'react';
import { Form, Input } from 'antd';
import {  QuestionCircleOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from '../../../components';
import { isValid } from 'date-fns';
import  validateField from "../../../utils/helpers/validateField.js";



function RegisterForm(props) {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  // console.log(values.email);
  const success = true;
  return (
    <div>
         <div className="auth__top">
    <h2>Регистрация</h2>
    <p>Для входа в чат Вам нужно зарегистрироваться</p>
    </div>
    
 <Block>
   {success?
      <Form
      className='login-form'
      onSubmit={handleSubmit}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      autoComplete="off"
    >  
      <Form.Item
        label="E-mail"
        name="email"        
        validateStatus={validateField("email", touched, errors)}
        hasFeedback
       >
        <Input   
        onChange={handleChange}
        onBlur={handleBlur}     
        id="email"
        value={values.email}   />
      </Form.Item>

      <Form.Item
        label="Username"        
       >
        <Input  
         type="text"
         onChange={handleChange}
         onBlur={handleBlur}         
         name="name" 
          />
      </Form.Item>   


  
      <Form.Item
        label="Password"
        name="password"
        validateStatus={validateField("password", touched, errors)}
        hasFeedback
        help={ !touched.password ? '' : errors.password && touched.password ? 'Заглавные+цифры+строчные': ''}
      >
        <Input.Password
                onChange={handleChange}
                onBlur={handleBlur}     
                id="password"
                value={values.password}
        />
      </Form.Item>
  
      <Form.Item
        label="Password repeat"
        name="password-repeat"
        validateStatus={validateField("password_2", touched, errors)}
        hasFeedback
      >
        <Input.Password
        onChange={handleChange}
        onBlur={handleBlur}     
        id="password_2"
        value={values.password}
        
        />
      </Form.Item>
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        {/* {isSubmiting && !isValid && <span>error</span>} */}
        <Button onClick={handleSubmit} type="primary" size='large'>Зарегистрироваться</Button>
      </Form.Item>
      <Link className='auth__register-link' to='/'>Войти в аккаунт</Link>
    </Form>
    :
    <div className='auth__success-block'>
      <div>
      <QuestionCircleOutlined />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту отправлено письмо с ссылкой на подтверждение
              аккаунта.
            </p>


    </div> 
  
  
  }

  </Block>
  </div>
  )
}

export default RegisterForm;