const express = require('express')
const app = express()
const port = 3000

//홈 페이지에서 Hello World!로 응답:
app.get('/', function (req, res) {
  res.send('Hello World!');
})

//화살표함수를 사용하는 동일한 Get 요청
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//애플리케이션의 홈 페이지인 루트 라우트(/)에서 POST 요청에 응답:
app.post('/', function (req, res) {
  res.send('Got a POST request');
})

//user 라우트에 대한 PUT 요청에 응답:
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
})

//user 라우트에 대한 DELETE 요청에 응답:
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})