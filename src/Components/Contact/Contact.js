import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
    const submit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
      {/* <h2 className="mt-5 mb-5 fw-bold fs-1">Get In Touch</h2> */}
      <div className="container">
        <div className="contact">
          <Form onSubmit={submit} className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Enter message"
                rows={3}
              />
            </Form.Group>
            <Button variant="primary" type="submit" id="submit-btn" >
              Submit
            </Button>
          </Form>
        </div>
        <img
          className="w-50 mb-5 ms-5 contact-img"
          src="contact.png"
          alt="images"
          srcset=""
        />
      </div>
    </div>
  );
};

export default Contact;
