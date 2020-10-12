require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const transporter = require('./config');
const nodemailer = require('nodemailer');
const app = express();


app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../build")));

app.use('*', express.static(path.join(__dirname, "../build/index.html")));

app.get("/env", (req, res)=>{
  res.send(process.env.EMAILJS_USER_ID)
})

app.listen(port, () => {
  console.log(`I am server I listen only on: PORT ${port}`)
})