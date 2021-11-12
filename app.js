const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World in Express!')
})

app.get('/elo', (req, res) => {
  res.send('addd second endpoint in express!')
})

app.get('/elo1', (req, res) => {
  res.send('addd second endpoint in express1!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})