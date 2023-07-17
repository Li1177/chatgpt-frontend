import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

// API接口
const getCodeAPI = (phone) => {
  console.log('获取验证码', phone);
};

const registerAPI = (phone, code) => {
  console.log('提交注册', phone, code);
};

const RegisterPage = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const getCode = () => {
    getCodeAPI(phone);
  };

  const register = () => {
    registerAPI(phone, code);
  };

  return (
    <Form>
      <Form.Item>
        <Input
          placeholder="手机号"
          onChange={(e) => setPhone(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button onClick={getCode}>获取验证码</Button>
      </Form.Item>

      <Form.Item>
        <Input
          placeholder="验证码"
          onChange={(e) => setCode(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button onClick={register}>注册</Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage;
