import './styles.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="flat" onClick={handleShow}>
        Contact Form
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send me an Email!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
          <label>Name:</label>
          <input className='form-name' type='text' name='name' required />
          <label>Email:</label>
          <input className='form-name' type='text' name='name' required/>
          <label>Phone number (optional):</label>
          <input className='form-name' type='text' name='name' />
          <textarea className='message' required placeholder='Write your message here!'/>
          <input className="submit-btn" type='submit' value='Submit' />
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ContactModal;

