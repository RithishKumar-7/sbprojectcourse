import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import illustration from '../assets/wlogin.png';
import { Typography, TextField, Button, FormControl } from '@mui/material';
import axios from 'axios';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const { token, user } = response.data;
  
      const expirationTime = new Date().getTime() + 5000000; // Example expiration time

      localStorage.setItem('username', user.username);
      localStorage.setItem('expiration', expirationTime);
      localStorage.setItem('role', user.role);
      localStorage.setItem('id', user.id);
      localStorage.setItem('data', JSON.stringify(user));
      localStorage.setItem('token', token);

      onLogin(user);
  
      switch (user.role) {
        case 'admin':
          navigate('/admin-dashboard');
          break;
        case 'employee':
          navigate('/employee-dashboard');
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
    } catch (err) {
      console.error("Login Error:", err);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-bg'></div>
      <div className='login-content'>
        <div className='login-img'>
          <img src={illustration} alt="Illustration" />
        </div>
        <div className='login-card'>
          <Typography variant='h4' className='title'>
            <b>Login</b>
          </Typography>
          {error && <Typography color="error" variant='body2' className='error-message'>{error}</Typography>}
          <form className='login-form' onSubmit={handleSubmit}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <TextField
                name='username'
                type='text'
                variant='outlined'
                value={form.username}
                onChange={handleChange}
                required
                label="Username"
              />
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <TextField
                name='password'
                type='password'
                variant='outlined'
                value={form.password}
                onChange={handleChange}
                required
                label="Password"
              />
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth id="login-button">
              Login
            </Button>
            <Typography className="message">
              Don't have an account?{' '}
              <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signup')}>
                Sign up
              </span>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
