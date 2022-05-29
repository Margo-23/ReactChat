import React from 'react';
import { Form, Input } from 'antd';
import {  QuestionCircleOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from '../../../components';



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
        validateStatus={ !touched.email? '' : errors.email && touched.email ? "error": 'success'}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Введите корректный емейл',
          },
        ]}
       >
        <Input   
        onChange={handleChange}
        onBlur={handleBlur}     
        id="email"
        value={values.email}   />
      </Form.Item>

      <Form.Item
        label="Username"        
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
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
        rules={[
          {
            required: true,
            message: 'Только латиница!',
          },
        ]}
        validateStatus={ !touched.password? '' : errors.password && touched.password ? "error": 'success'}
        hasFeedback
        help='Только латиница!'
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
        rules={[
          {
            required: true,
            message: 'Please repeat your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
  
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
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