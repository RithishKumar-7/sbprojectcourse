import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file
import'../styles/Footer.css';

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
        default:
          navigate('/');
      }
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome {user ? user.role : 'Guest'}</h1>
      {user ? (
        <>
          <button className="home-button" onClick={redirectToDashboard}>
            Go to your dashboard
          </button>
          <button className="home-button" onClick={onLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please <a href="/login" className="login-link">login</a> to see your dashboard.</p>
      )}
    </div>
  );
};

export default Home;