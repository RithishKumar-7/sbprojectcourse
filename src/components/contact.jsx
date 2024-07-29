import React from 'react';
import Footer from './Footer';
import { TextField, Button, Typography } from '@mui/material';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="contact">
        <div className="contact-content">
          <div className="contact-info">
            <Typography variant="h4" className="contact-heading">
              Get in Touch
            </Typography>
            <Typography variant="body1" className="contact-description">
              If you have any questions or need support, feel free to reach out to us using the contact form below. We look forward to hearing from you!
            </Typography>
            <form className="contact-form">
              <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                className="contact-input"
              />
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                className="contact-input"
              />
              <TextField
                id="message"
                label="Message"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                className="contact-input"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="contact-button"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
