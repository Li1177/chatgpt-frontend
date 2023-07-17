const express = require('express')
const app = express()

const url = require('url')

app.use(express.json())

const users = [{phone: '13800138000', code: '123456'}]

app.get(url.format({pathname:'\\'}), (req, res) => {
  res.send('服务器运行正常')   
})

app.get('/', (req, res) => {
  res.send('服务器运行正常')
})

// 注册接口
app.post('/register', (req, res) => {

  // 获取参数
  const phone = req.body.phone
  const code = req.body.code

  // 校验参数
  if(!phone || !code) {
    return res.status(422).send({error: '手机号和验证码不能为空'})
  }

  if(phone.length != 11) {
    return res.status(422).send({error: '手机号长度不正确'})
  }

  // TODO: 保存用户数据

  res.send('注册成功')
})

app.post('/login', (req, res) => {
  // 登录接口未实现
})

app.listen(3000, () => {
  console.log('Server started on port 3000') 
})