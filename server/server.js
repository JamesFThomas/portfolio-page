require('dotenv').config();
const express = require('express');
const path = require('path');
const port = 8080;
const transporter = require('./config');
const app = express();


app.use(express.json());

app.use("/", express.static(path.join(__dirname, "../build")));

app.use('*', express.static(path.join(__dirname, "../build/index.html")));

app.post("/send", (req, res)=>{
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: req.body.subject,
      html: req.body.message
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
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something weird happened, hit me  back later'
    });
  }
})


app.listen(port, () => {
  console.log(`I am server I listen only on: PORT ${port}`)
})