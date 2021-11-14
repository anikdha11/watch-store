import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link, NavLink} from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Box } from '@mui/system';


const List4 = () => {
  const [open, setOpen] = React.useState(false);

  const [users, setUsers] = useState([])
    const {isLoading } = useAuth();
 
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [isLoading])


  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'none', overflow:'none' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {
        users.map(user =><Box key={user._id}> {user.role === "admin" && <Link  style={{ textDecoration: "none", color: 'white' }} to="/admin"><Button id="btn" color="inherit"> <ListItemText primary="Dashboard" /></Button></Link>}</Box>)
      }
    


      <ListItemButton onClick={handleClick}>
       
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink style={{ textDecoration: "none", color: 'white' }} to="/myorders">
              <ListItemText id="btn" sx={{ fontWeight: 700 }} primary="MY ORDERS" />
            </NavLink>

          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink style={{ textDecoration: "none", color: 'white' }} to="/review">
              <ListItemText id="btn" sx={{ fontWeight: 700 }} primary="Review" />
            </NavLink>

          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <NavLink style={{ textDecoration: "none", color: 'white' }} to="/payment">
              <ListItemText id="btn" sx={{ fontWeight: 700 }} primary="Pay" />
            </NavLink>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default List4;