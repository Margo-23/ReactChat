import React from 'react';
import { Form, Input } from 'antd';
import {  QuestionCircleOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';

import {Button, Block} from '../../../components';

function RegisterForm() {
  const success = false;
  return (
    <div>
         <div className="auth__top">
    <h2>Регистрация</h2>
    <p>Для входа в чат Вам нужно зарегистрироваться</p>
    </div>
 <Block>
   {success?
      <Form
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
       >
        <Input   />
      </Form.Item>
  
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
       >
        <Input   />
      </Form.Item>
  
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
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
        <Button type="primary" size='large'>Зарегистрироваться</Button>
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