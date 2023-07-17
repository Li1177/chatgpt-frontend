import { useState } from 'react';

import { Form, Input, Button } from 'antd';

import RegisterPage from './register';

const LoginPage = () => {

  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleLogin = () => {
    
    // 调用部署在ngrok上的后端登录接口
    fetch('https://f4f8-114-246-218-115.ngrok-free.app/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone, 
        code  
      })
    }).then(res => {
      console.log('登录成功')
    })

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