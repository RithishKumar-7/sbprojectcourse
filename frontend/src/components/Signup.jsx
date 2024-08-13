import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import illustration from '../assets/sign-u .png';
import { Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import '../styles/Signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    company: '',
    role: '', 
  });

  const [error, setError] = useState(null);
  const nav = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setForm({ ...form, role: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', form, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      nav('/login');
    } catch (error) {
      setError(error.response?.data || 'An error occurred. Please try again.');
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-bg'></div>
      <div className='signup-img'>
        <img src={illustration} alt="Illustration" />
      </div>
      <div className='signup-card'>
        <Typography variant='h4' className='title'>
          <b>Signup</b>
        </Typography>
        <form className="signup-form" onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined" margin="normal">
            
            <TextField
              id="firstName"
              name='firstName'
              type='text'
              variant='outlined'
              value={form.firstName}
              onChange={handleChange}
              required
              label="First Name"
              className='signup-input'
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            
            <TextField
              id="lastName"
              name='lastName'
              type='text'
              variant='outlined'
              value={form.lastName}
              onChange={handleChange}
              required
              label="Last Name"
              className='signup-input'
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
           
            <TextField
              id="username"
              name='username'
              type='text'
              variant='outlined'
              value={form.username}
              onChange={handleChange}
              required
              label="Username"
              className='signup-input'
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            
            <TextField
              id="company"
              name='company'
              type='text'
              variant='outlined'
              value={form.company}
              onChange={handleChange}
              required
              label="Company"
              className='signup-input'
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            
            <TextField
              id="email"
              name='email'
              type='email'
              variant='outlined'
              value={form.email}
              onChange={handleChange}
              required
              label="Email"
              className='signup-input'
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            
            <TextField
              id="password"
              name='password'
              type='password'
              variant='outlined'
              value={form.password}
              onChange={handleChange}
              required
              label="Password"
              className='signup-input'
            />
          </FormControl>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Role</InputLabel>
            <Select
              value={form.role}
              onChange={handleRoleChange}
              name="role"
              label="Role"
              required
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="team_lead">Team Lead</MenuItem>
              <MenuItem value="product_manager">Product Manager</MenuItem>
            </Select>
          </FormControl>
          {error && (
            <Typography color='error' variant='body2' className='signup-message'>
              {error}
            </Typography>
          )}
          <Button type='submit' variant='contained' color='primary' fullWidth id="signup-button">
            Signup
          </Button>
          <Typography className="signup-message">
            Already have an account?{' '}
            <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => nav('/login')}>
              Login
            </span>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default Signup;
