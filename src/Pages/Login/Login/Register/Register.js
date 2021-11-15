import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from "../../../../hooks/useAuth"
import Footer from '../../../Home/Shared/Footer/Footer';
import Navegation from '../../../Home/Shared/Header/Navegation';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory()

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <>
            <Navegation></Navegation>
            <Container>
                <Grid container >
                    <Grid item sx={{ mt: 8 }} xs={12} md={12}>
                        <Typography variant="body1" gutterBottom>Please Register</Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onChange={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="ReType Your Password"
                                type="password"
                                name="password2"
                                onChange={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <br />
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Register;