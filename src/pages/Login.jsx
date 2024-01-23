import React, { useState } from 'react';
import { Button, TextField, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/auth/login', { email, password })
    .then(response => {
      if (response.data.role === 'admin') {
        navigate('/admin/*');
      } else if (response.data.role === 'mentor') {
        navigate('/mentor/*', { state: { mentorId: response.data.mentorId } });
        console.log(response.data);
      } else {
        alert('Invalid credentials');
      }
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  return (
    <div className='login-container'>
      <Container maxWidth="xs">
        <h1>Log In</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSubmit}
            >
              Log In
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Login;
