import React, { useState } from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
require('dotenv').config();
import "./css/Contact.css"
import emailjs from 'emailjs-com';


function Contact() {

  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(null);



  const contactMe = event => {

    event.preventDefault();

    const {name, email, subject, message} = state;
  
      const emailContent = {
        subject: subject,
        name: name,
        email: email,
        message: message,
        }

    axios.get("/env", { ...state })
      .then(response =>{
        emailjs.send("portfolio_website","template_fru2gal", emailContent, response.data.EMAILJS_USER_ID)
        .then(response =>{
          setResult({success: true, message: 'I got your message and will respond ASAP'});
          setState({ name: '', email: '', subject: '', message: '' });
        })
        .catch(() => {
          setResult({success: false, message: 'Something went wrong. Please try again later'});
        });
      })
      .catch(() => {
        setResult({success: false, message: 'Something went wrong. Please try again later'});
      });

 }

  const contactValue = event => {
    const { name, value } = event.target;

    setState({
      ... state,
      [ name ]: value
    });
  };


  return (
  <div className="contact-page">
    <Container className="contact-content col-md-6 offset-md-3">
      <Form  onSubmit={contactMe}>
        <Form.Group controlId="name">
          <Form.Row>
            <Col className="offset-md-2" sm={8}>
              <Form.Label >Full Name</Form.Label>
              <Form.Control type="text" name="name" value={state.name} onChange={contactValue} placeholder="Tyrone Jackson" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Row>
            <Col className="offset-md-2" sm={8}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={state.email} onChange={contactValue} placeholder="TyroneJackson@gmail.com" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Row>
            <Col className="offset-md-2" sm={8}>
              <Form.Label >Subject</Form.Label>
              <Form.Control type="text" name="subject" value={state.subject} onChange={contactValue} placeholder="Software Developer Position" />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Row>
            <Col className="offset-md-2" sm={8}>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" value={state.message} onChange={contactValue} rows="5" placeholder="We would like you to join our team.." />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group controlId="contact">
          <Form.Row>
            <Col className="offset-md-2">
              <Button type="submit" variant="primary" size="lg">Contact James</Button>
           </Col>
          </Form.Row>
        </Form.Group>
      </Form>
        {result && (
          <p className={`${result.success ? 'success' : 'error'}`}>
            {result.message}
          </p>
        )}
    </Container>
  </div>
   );
}

export default Contact;