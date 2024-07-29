import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import illustration from '../Asserts/images/sign-u .png'; // Ensure this path is correct
import { Typography, TextField, Button, MenuItem } from '@mui/material';
import '../styles/Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    role: '',
    company: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    navigate('/'); // Redirect after form submission
  };

  return (
    <div className='signup-container'>
      <div className='signup-bg'></div>
      <div className='signup-content'>
        <div className='signup-img'>
          <img src={illustration} alt="Illustration" />
        </div>
        <div className='signup-card'>
          <Typography variant='h4' className='title'><b>Signup</b></Typography>
          <form className='signup-form' onSubmit={handleSubmit}>
            <TextField
              label='First Name'
              name='firstName'
              type='text'
              variant='outlined'
              value={form.firstName}
              onChange={handleChange}
              className='signup-input'
              required
            />
            <TextField
              label='Last Name'
              name='lastName'
              type='text'
              variant='outlined'
              value={form.lastName}
              onChange={handleChange}
              className='signup-input'
              required
            />
            <TextField
              label='Username'
              name='username'
              type='text'
              variant='outlined'
              value={form.username}
              onChange={handleChange}
              className='signup-input'
              required
            />
            <TextField
              label='Role'
              name='role'
              select
              variant='outlined'
              value={form.role}
              onChange={handleChange}
              className='signup-input'
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="team_lead">Team Lead</MenuItem>
              <MenuItem value="product_manager">Product Manager</MenuItem>
            </TextField>
            <TextField
              label='Company'
              name='company'
              type='text'
              variant='outlined'
              value={form.company}
              onChange={handleChange}
              className='signup-input'
              required
            />
            <TextField
              label='Email'
              name='email'
              type='email'
              variant='outlined'
              value={form.email}
              onChange={handleChange}
              className='signup-input'
              required
            />
            <TextField
              label='Password'
              name='password'
              type='password'
              variant='outlined'
              value={form.password}
              onChange={handleChange}
              className='signup-input'
              required
            />
            <Button type='submit' variant='contained' color='primary' fullWidth id="button">Signup</Button>
            <Typography className="message">
              Already have an account?{' '}
              <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/login')}>
                Login
              </span>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;