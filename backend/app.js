const express = require('express')
const app = express()

const url = require('url') 
const users = []

app.use(express.json())

app.get(url.format({pathname:'\\'}), (req, res) => {
  res.send('服务器运行正常')
})

app.get('/', (req, res) => {
  res.send('服务器运行正常')  
})

// 注册接口逻辑

app.post('/register', (req, res) => {
  // ...省略注册校验和保存逻辑
})

// 登录接口
app.post('/login', (req, res) => {

  const phone = req.body.phone
  const code = req.body.code

  const user = users.find(u => u.phone === phone)

  if (user && user.code === code) {
    res.send('登录成功')
  } else {
    res.status(400).send('用户名或密码错误')  
  }

})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})