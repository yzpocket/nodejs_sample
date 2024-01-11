const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views')

//Root URL('/') 경로에 대한 Get 요청
app.get('/', function (req, res) {
  res.render('index');
})

//특정 URL 경로에 대한 Get 요청 - 1
app.get('/boards', function (req, res) {
  res.render('boards');
})

//특정 URL 경로에 대한 Get 요청 - 2
app.get('/users', function (req, res) {
  res.render('users');
})

//특정 URL 경로에 대한 Get 요청의 JSON 형식 응답 - 1
app.get('/api/boards/1', function (req, res) {
  res.send('{"id": 1, "title": "Title of the novel", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha.."}');
})

//특정 URL 경로에 대한 Get 요청의 JSON 형식 응답 - 2
app.get('/api/users/1', function (req, res) {
  res.send('{"id": 1, "username": "Fred", "role": "USER"}');
})

app.listen (port, () =>
  console. log(`Example app listening on port ${port},`)
)