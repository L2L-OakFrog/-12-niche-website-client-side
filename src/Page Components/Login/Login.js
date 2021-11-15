import React, { useState } from 'react';
import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';
import signin from '../../Attachments/Signin.jpg'
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/UseAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { user, loading, error, loginUser } = useAuth();

    /* Redirect */
    const location = useLocation();
    const history = useHistory();

    /* Inputs */
    const [loginData, setLoginData] = useState({});
    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    return (
        <Container>
            <Typography
                sx={{ mt: 8 }}
                variant='h3'
                gutterBottom
            >Login with your credentials</Typography>
            <hr />
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='h4' gutterBottom>Login</Typography>
                    {!loading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            id="standard-required"
                            label="Email"
                            name="email"
                            type="email"
                            onBlur={handleChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            id="standard-required"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            variant="standard"
                        />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                        >Submit</Button>
                        <NavLink
                            to='/register'
                            style={{ textDecoration: 'none' }}
                        ><Button
                            sx={{ width: '75%', m: 1 }}
                            variant="text"
                        >Not a user? Register</Button></NavLink>
                    </form>}
                    {loading && <LinearProgress />}
                    {user?.email && <Alert severity="success">Welcome!</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={signin} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;