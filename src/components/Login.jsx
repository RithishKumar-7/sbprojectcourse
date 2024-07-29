import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../Asserts/images/wlogin.png'; // Ensure this path is correct
import { Typography, TextField, Button, MenuItem } from '@mui/material';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: '', password: '', role: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email: form.email, role: form.role };
    onLogin(userInfo);
    navigate('/'); // Redirect after form submission
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
          <form className='login-form' onSubmit={handleSubmit}>
            <TextField
              label='Email'
              name='email'
              type='email'
              variant='outlined'
              value={form.email}
              onChange={handleChange}
              className='login-input'
              required
              fullWidth
            />
            <TextField
              label='Password'
              name='password'
              type='password'
              variant='outlined'
              value={form.password}
              onChange={handleChange}
              className='login-input'
              required
              fullWidth
            />
            <TextField
              label='Role'
              name='role'
              select
              variant='outlined'
              value={form.role}
              onChange={handleChange}
              className='login-input'
              required
              fullWidth
            >
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='employee'>Employee</MenuItem>
              <MenuItem value='team_lead'>Team Lead</MenuItem>
              <MenuItem value='hr'>HR</MenuItem>
            </TextField>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              fullWidth
              className='login-button'
            >
              Login
            </Button>
            <Typography className='message'>
              Don't have an account?{' '}
              <span
                style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => navigate('/signup')}
              >
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
