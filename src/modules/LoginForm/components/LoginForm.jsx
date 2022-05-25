import React from 'react';
import { Form, Input } from 'antd';
import {Link} from 'react-router-dom';

import {Button, Block} from '../../../components';

function LoginForm() {
  return (
    <div>
         <div className="auth__top">
    <h2>Войти в аккаунт</h2>
    <p>Пожалуйста войдите в свой аккаунт</p>
    </div>
 <Block>
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
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" size='large'>Войти</Button>
    </Form.Item>
    <Link className='auth__register-link' to='/register'>Зарегистрироваться</Link>
  </Form>
  </Block>
  </div>
  )
}

export default LoginForm;