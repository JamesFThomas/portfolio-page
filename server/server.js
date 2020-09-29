require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// const bodyParser = require('body-parser');

// app.use(bodyParser.json);
// app.use(bodyParser.urlencoded({extended: true}));

app.use("/", express.static(path.join(__dirname, "../build")))

app.get('/', (req, res) => {
  console.log('hit the GET route');
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`I am server I listen only on: PORT ${port}`)
})