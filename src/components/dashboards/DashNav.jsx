import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import '../../styles/DashNav.css';

const DashNav = ({ iconColor, textColor }) => {
  return (
    <div className="dashnav-container" style={{ '--icon-color': iconColor, '--text-color': textColor }}>
      <Link to="/" className="home-link">
        <IconButton className="icon-button">
          <HomeIcon />
        </IconButton>
      </Link>

      <Link to="/about" className="about-link">
        <IconButton className="icon-button">
          <InfoIcon />
        </IconButton>
      </Link>

      <Link to="/contact" className="contact-link">
        <IconButton className="icon-button">
          <ContactMailIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default DashNav;
