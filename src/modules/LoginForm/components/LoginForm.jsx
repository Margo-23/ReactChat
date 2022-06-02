import React from 'react';
import { Form, Input } from 'antd';
import {Link} from 'react-router-dom';

import {Button, Block} from '../../../components';
import  validateField from "../../../utils/helpers/validateField.js";

function LoginForm(props) {
  // console.log(props);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <div>
    <div className="auth__top">
    <h2>Войти в аккаунт</h2>
    <p>Пожалуйста войдите в свой аккаунт</p>
    </div>
 <Block>
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
      label="Username"
      name="username"
      validateStatus={validateField("email", touched, errors)}
      hasFeedback
     >
      <Input       
        onChange={handleChange}
        onBlur={handleBlur}     
        id="email"
        value={values.email}  />
    </Form.Item>

    <Form.Item
        label="Password"
        name="password"
        validateStatus={validateField("password", touched, errors)}
        help={!touched.password ? "" : errors.password}
        hasFeedback
      >
        <Input.Password
        onChange={handleChange}
        onBlur={handleBlur}     
        id="password"
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
    <Button onClick={handleSubmit} type="primary" size='large'>Войти в аккаунт</Button>
    </Form.Item>
    <Link className='auth__register-link' to='/register'>Зарегистрироваться</Link>
  </Form>
  </Block>
  </div>
  )
}

export default LoginForm;