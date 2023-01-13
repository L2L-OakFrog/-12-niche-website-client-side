import React, { useState } from 'react';
import signin from '../../Attachments/Signin.jpg'
import useAuth from '../../Hooks/UseAuth';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Alert, Button, Container, Grid, LinearProgress, TextField, Typography } from '@mui/material';

const Register = () => {
    const { user, loading, error, logout, register } = useAuth();

    /* Redirect */
    const history = useHistory();

    // Inputs
    const [loginData, setLoginData] = useState({});
    const handleChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Passwords did not match');
            return
        }
        register(loginData.email, loginData.password, loginData.name, loginData.img, history);
        e.preventDefault();
    }
    return (
        <Container style={{ backgroundColor: 'white' }}>
            <Typography
                sx={{ mt: 8 }}
                variant='h3'
                gutterBottom
            ></Typography>

            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant='h4' gutterBottom>Register</Typography>
                    {!loading && <form onSubmit={handleRegisterSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            id="standard-required"
                            label="Name"
                            name="name"
                            onBlur={handleChange}
                            variant="standard"
                        />
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            required
                            id="standard-required"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Image Url"
                            name="img"
                            onBlur={handleChange}
                            variant="standard"
                        />
                        <Button
                            sx={{ width: '75%', m: 1 }}
                            variant="contained"
                            type="submit"
                        >Submit</Button>
                        <NavLink
                            to='/login'
                            style={{ textDecoration: 'none' }}
                        ><Button
                            sx={{ width: '75%', m: 1 }}
                            variant="text"
                        >Already Registered? Please Login</Button></NavLink>
                    </form>}
                    {loading && <LinearProgress />}
                    {user?.email && <Alert severity="success">Successfully created your account.</Alert>}
                    {user?.email && <Button
                        sx={{ width: '75%', m: 1 }}
                        variant="contained"
                        onClick={logout}
                    >Log Out</Button>}
                    {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={signin} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;