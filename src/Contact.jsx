import React from 'react';
import { Form, Col, Container, Button, Row } from 'react-bootstrap';

function Contact() {

  return (

    <Container style={{ marginTop: '60px', marginBottom: '60px'}}>
        <Form>
        <Form.Group>
          <Form.Row>
            <Col sm={5}>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Tyrone" />
              <br></br>
            </Col>
            <Col sm={5}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Jackson" />
              <br></br>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={10}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="TyroneJacskson@gmail.com" />
              <br></br>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={10}>
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" placeholder="I am interesting in hiring you for a wonderful opportunity........" />
              <br></br>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={10}>
              <Button type="submit" variant="primary" size="lg">Contact James</Button>
              <br></br>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
   );
}

export default Contact;