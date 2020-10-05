import React from 'react';
import { Form, Col, Container, Button, Row } from 'react-bootstrap';

function Contact() {

  return (

    <Container >
        <Form>
        <Form.Group>
          <Form.Row>
            <Col sm={5}>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder="Tyrone" />
            </Col>
            <Col sm={5}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder="Jackson" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={10}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="TyroneJacskson@gmail.com" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={10}>
              <Form.Label>Message</Form.Label>
              <Form.Control type="textarea" placeholder="I am interesting in hiring you for a wonderful opportunity........" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col sm={10}>
              <Button type="submit" variant="primary" size="lg">Contact James</Button>
            </Col>
          </Form.Row>
        </Form.Group>
      </Form>
    </Container>
   );
}

export default Contact;