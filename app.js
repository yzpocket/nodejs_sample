const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
require('dotenv').config();

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('views', './views')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// MySQL connection
const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  insecureAuth: true,
});

// MySQL connection check
connectionPool.getConnection((err, connection) => {
  if (err) {
    console.error('MySQL에 연결 중 에러 발생:', err);
  } else {
    console.log('MySQL에 연결되었습니다.');
    // 사용이 끝난 경우 연결을 풀에 반환합니다.
    connection.release();
  }
});

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

app.get('/visit', function (req, res) {
  res.render('visit');
})

app.get('/contact', function (req, res) {
  res.render('contact');
})

app.post('/api/contact', function (req, res) {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const memo = req.body.memo;

  const data = `${name} ${phone} ${email} ${memo}`

  res.send(data);
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