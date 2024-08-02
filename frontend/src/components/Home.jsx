import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';
import illustration from '../Asserts/images/scheduling-4.jpg'; 
import newIllustration from '../Asserts/images/schedule--1.jpg'; 
import anotherIllustration from '../Asserts/images/scheduling.jpg'; 
import additionalIllustration from '../Asserts/images/wbackground.png'; // Import the new image
import '../styles/Home.css'; 
import Navbar from './NavBar';
import Footer from './Footer';

const Home = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const redirectToDashboard = () => {
    if (user) {
      switch (user.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
          break;
        case 'hr':
          navigate('/hr-dashboard');
          break;
        case 'team_lead':
          navigate('/team-lead-dashboard');
          break;
        case 'product_manager':
          navigate('/product-manager-dashboard');
          break;
        default:
          navigate('/');
      }
    } else {
      navigate('/login');  
    }
  };

  return (
    <div className="Home">
      <div className="home-container">
        <div className="hero-bg">
          <Navbar />
          <div className="hero">
            <div className="hero-img">
              <img src={illustration} alt="Illustration" />
            </div>
            <div className="hero-content">
              <h1>Effortless Staff Scheduling with <b>Work...</b></h1>
              <div className="dashnavlol">
                <Typography variant="h4">
                  Welcome  {user ? user.role : ''}
                </Typography>
                {user ? (
                  <>
                    <Button variant="contained" color="secondary" onClick={redirectToDashboard} className='dashnavlolbutton'>
                      Dashboard
                    </Button><br></br>
                    <Button color="secondary" onClick={onLogout} className='logouthome'>
                      Logout
                    </Button>
                  </>
                ) : (
                  <Typography>
                    Please <a href="/login">login</a> to see your dashboard.
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="feature">
          <div className="featlol">
            <div className="content-1">
              <div className="line">.</div><br></br>
              <div className="line-2">.</div>
              <h1 style={{color:"white"}}>Manage your team's schedules efficiently and seamlessly.</h1>
              <div className="contlist">
                <h5>
                  "Save time with our automated scheduling algorithms that ensure optimal shift distribution."<br></br>
                  "Receive instant updates and notifications about schedule changes."<br></br>
                  "Facilitate seamless communication between staff members with built-in messaging."<br></br>
                </h5>
              </div>
              <div className="line-2">.</div><br></br>
              <div className="line">.</div>
            </div>
            <div className="content-img">
              <img src={newIllustration} alt="newIllustration" />
            </div>
          </div>
          <div className="featlol">
            <div className="content-1">
              <h1 style={{color:"white"}}>Enhance Your Team's Efficiency with Real-Time Updates</h1>
              <div className="contlist">
                <h5>
                  "Our platform provides real-time updates and notifications to ensure your team is always on the same page."<br></br>
                  "Easily manage last-minute changes and ensure everyone is informed and ready for their shifts."<br></br>
                  "Optimize your workforce by leveraging data-driven insights to improve scheduling efficiency."
                </h5>
              </div>
            </div>
            <div className="content-img">
              <img src={anotherIllustration} alt="anotherIllustration" />
            </div>
          </div>
          {/* New Feature Section */}
          <div className="featlol">
            <div className="content-1">
              <h1 style={{color:"white"}}>Streamline Your Staff Scheduling with Advanced Tools</h1>
              <div className="contlist">
                <h5>
                  "Utilize advanced tools to streamline your staff scheduling process."<br></br>
                  "Benefit from easy-to-use features that simplify shift planning and allocation."<br></br>
                  "Enhance your scheduling accuracy with our innovative platform."
                </h5>
              </div>
            </div>
            <div className="content-img">
              <img src={additionalIllustration} alt="additionalIllustration" />
            </div>
          </div>
        </div>
      </div>  
      <Footer />
    </div>  
  );
};

export default Home;
