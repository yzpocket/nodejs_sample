const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/profile', function (req, res) {
  res.render('profile');
})

app.get('/boards', function (req, res) {
  res.render('boards');
})

app.get('/users', function (req, res) {
  res.render('users');
})

app.get('/api/boards/1', function (req, res) {
  res.send('{"id": 1, "title": "Title of the novel", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha.."}');
})

app.get('/api/users/1', function (req, res) {
  res.send('{"id": 1, "username": "Fred", "role": "USER"}');
})


app.listen (port, () =>
  console. log(`서버 실행. 접속주소 : http://localhost:${port}`)
)