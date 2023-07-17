import { useState } from 'react';
import { Form, Input, Button } from 'antd';

import RegisterPage from './register';

const LoginPage = () => {

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleLogin = () => {
    console.log('登录', phone, code);
  };

  return (
    <>
      <Form>
        // 登录表单代码
      </Form>
      
      <div>
        还没有账号? <RegisterPage />
      </div>
    </>
  );
}

export default LoginPage;