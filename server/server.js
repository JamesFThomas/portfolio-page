require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use("/", express.static(path.join(__dirname, "../build")))

app.listen(port, () => {
  console.log(`I am server I listen only on: PORT ${port}`)
})