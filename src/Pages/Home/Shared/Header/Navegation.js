import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';


const Navegation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 700, color: 'white' }}>
            Watches Store
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ textDecoration: "none", color: 'white', fontWeight: 700 }} to="/home">Home</NavLink>
          </Typography>
          <NavLink to="/login"><Button sx={{ fontWeight: 700, color: 'white' }} color="inherit">Login</Button></NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navegation;