import React, { useState } from 'react';
import { Button,TextField,Grid,Container } from '@mui/material';
import './Login.css'

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('An user has signed in with the following credentials:');
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
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