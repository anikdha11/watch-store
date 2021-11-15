import React, { useState } from 'react';
import { Button, Container, Grid, Typography, TextField, CircularProgress, Alert } from '@mui/material';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navegation from '../../Home/Shared/Header/Navegation';
import Footer from '../../Home/Shared/Footer/Footer';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, signInWithGoogle, user, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <>
            <Navegation></Navegation>
            <Container>
                <Grid container >
                    <Grid sx={{ mt: 5 }} item xs={12} md={12}>
                        <Typography variant="body1" gutterBottom>
                            Please Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '50%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnChange}
                                variant="standard" />
                            <Button sx={{ width: '50%', m: 1, bgcolor: 'success.main', fontWeight: "500" }} type="submit" orientation="vertical"
                                variant="contained">Login</Button>
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to="/register"><Button>New user? Please Register</Button></NavLink>
                            <br />
                            {isLoading && <CircularProgress color="success" />}
                            {user?.email && <Alert serverity="success"> User login successfully</Alert>}
                            {
                                authError && <Alert serverity="error">{authError}</Alert>}
                        </form>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;