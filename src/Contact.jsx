import React, { useState } from 'react';
import { Form, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
require('dotenv').config();
import "./css/Contact.css"


function Contact() {

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const contactMe = event => {
    event.preventDefault();
    axios.post("/send", { ...state })
      .then(response =>{
        setResult(response.data);
        setState({ firstName: '', lastName: '', email: '', message: '' });
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
    <Container className="contact-content">
        <Form onSubmit={contactMe}>
        <Form.Group>
          <Form.Row>
            <Col sm={6}>
              <Form.Label >First Name</Form.Label>
              <Form.Control type="text" name="firstName" value={state.firstName} onChange={contactValue} placeholder="Tyrone" />
              <br></br>
            </Col>
            <Col sm={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastName" value={state.lastName} onChange={contactValue} placeholder="Jackson" />
              <br></br>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={12}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={state.email} onChange={contactValue} placeholder="TyroneJacskson@gmail.com" />
              <br></br>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={12}>
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" value={state.message} onChange={contactValue} rows="5" placeholder="I am interesting in hiring you for a wonderful opportunity........" />
              <br></br>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={12}>
              <Button type="submit" variant="primary" size="lg">Contact James</Button>
              <br></br>
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