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

app.post("/send", (req, res)=>{
  // console.log("****form data****", req.body);
    const {name, email, subject, message} = req.body;
    const fullEmail = `
      <b>from:</b> ${name},<br>
      <b>email:</b> ${email},<br>
      <b>message:</b><br>
      ${message}
      `
    const mailOptions = {
      from: name,
      to: process.env.EMAIL,
      subject: subject,
      html: fullEmail
    };

    transporter.sendMail(mailOptions, function(err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something weird happened, hit me  back later'
        });
      } else {
        res.send({
          success: true,
          message: "I got your message and will respond ASAP"
        });
      }
    });
})


app.listen(port, () => {
  console.log(`I am server I listen only on: PORT ${port}`)
})