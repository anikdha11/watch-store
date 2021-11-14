import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import List4 from '../../../List/List4';
import useAuth from '../../../../hooks/useAuth';


const Navegation = () => {
  const { user, logOut,admin } = useAuth()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: 'success.main' }} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          {user?.email ? <Typography id="btn" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 700, color: 'white' }}>
            <List4></List4>
          </Typography> :
            <Typography id="btn" variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', fontWeight: 700, color: 'white' }}>
              Watches Store
            </Typography>}

         {admin ?
          <NavLink style={{ textDecoration: "none", color: 'white', fontWeight: 700 }} to="/admin">
            <Button id="btn" sx={{ fontWeight: 700, color: 'white' }} color="inherit">Admin</Button>
          </NavLink>:
           <NavLink style={{ textDecoration: "none", color: 'white', fontWeight: 700 }} to="/home">
           <Button id="btn" sx={{ fontWeight: 700, color: 'white' }} color="inherit">Home</Button>
         </NavLink>
          }
          {user?.email ? <Box><Button onClick={logOut} id="btn" sx={{ fontWeight: 700, color: 'white' }} color="inherit">LogOut</Button> <span id="btn">{user.displayName}</span></Box> :
            <NavLink style={{ textDecoration: "none" }} to="/login"><Button id="btn" sx={{ fontWeight: 700, color: 'white' }} color="inherit">Login</Button></NavLink>}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navegation;