import { Container, Row, Col, } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import React from 'react';
import emailjs from 'emailjs-com'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import './Contact.css'
 

const Contact = () => {
  function senEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_pouhvhu', 'template_71ad0fo', e.target, '1g7P4ZbojtR5QuV-3')
      .then(res => {
        console.log(res);
        toast.success("Your message has been sent");
      }).catch(err => console.log(err));

  }


  return (
    <Container style={{ paddingTop: '50px' }} >
      <Row >
        <Col md={6} className="c-left" >
          <h1 >Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form onSubmit={senEmail} >
            <input name="name" type="text" id='name' className="user" placeholder="Name" />
            <input name="user_email" type="email" id='email' className="user" placeholder="Email" />
            <textarea name="message" id='messaage' className="user" placeholder="Message" />
            <Button onClick={Contact} type="submit" className="button form-control btn btn-primary">Send</Button>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              limit={1}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </form>
        </Col>
      </Row>
    </Container>
  )
}


export default Contact