import React from 'react';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import '../styles/About.css';
import illustration from '../Asserts/images/about-2.jpg'; // Importing the image
import Footer from './Footer.jsx';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <img src={illustration} alt="Illustration" className="about-image" />
        <div className="about-text">
          <h1>About Us</h1>
          <p> we are dedicated to revolutionizing the way organizations handle staff scheduling. Our platform provides an intuitive and powerful solution designed to simplify the complexities of scheduling, allowing businesses to efficiently manage their workforce with ease.</p> 
            <p>By offering features such as automated shift scheduling, real-time updates, and seamless integration with existing systems, we empower teams to streamline operations and enhance productivity.</p>
          <p> Whether you're a small business or a large enterprise, WorkForce is committed to providing a user-friendly experience that ensures your scheduling processes are as efficient and stress-free as possible</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
