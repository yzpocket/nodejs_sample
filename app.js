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
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  insecureAuth: true,
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
  const query = `INSERT INTO contact(name, phone, email, memo, create_at, modify_at)
                 VALUES ('${name}','${phone}','${email}','${memo}',NOW(), NOW())`;

  connection.query(query, function(err, result) {
    if (err) {
      console.error('데이터 삽입 중 에러 발생:', err);
      res.status(500).send('내부 서버 오류');
    } else {
      console.log('데이터가 삽입되었습니다.');
      res.send("<script>alert('문의사항이 등록되었습니다.'); location.href='/'</script>");
    }
  });
});

app.get('/api/boards/1', function (req, res) {
  res.send('{"id": 1, "title": "Title of the novel", "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha.."}');
})

app.get('/api/users/1', function (req, res) {
  res.send('{"id": 1, "username": "Fred", "role": "USER"}');
})


app.listen (port, () =>
  console. log(`서버 실행. 접속주소 : http://localhost:${port}`)
)