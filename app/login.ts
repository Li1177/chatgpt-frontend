import { useState } from 'react';

import { Form, Input, Button } from 'antd';

import RegisterPage from './register';

const LoginPage = () => {

  const (phone, setPhone) = useState('');

  const (code, setCode) = useState('');

  const handleLogin = async () => {

    const res = await fetch('https://xxx-ngrok-url.io/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone,
        code  
      })
    });

    const data = await res.json();

    console.log('登录成功');

  };

  return (
    <>
      <Form>
       // 登录表单
      </Form>
      
      <div>
        还没有账号? <RegisterPage />
      </div>
    </>
  );
}

export default LoginPage;
