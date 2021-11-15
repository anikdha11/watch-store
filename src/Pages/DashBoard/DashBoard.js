import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import MakeAdmin from '../Admin/MakeAdmin';
import useAuth from "../../hooks/useAuth"
import ManageAllOrders from '../ManageOrders/ManageAllOrders';
import AddProducts from '../AddProducts/AddProducts';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import { bgcolor } from '@mui/system';

const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    let { path, url } = useRouteMatch();
    const { admin, user, logOut } = useAuth()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: "none", color: 'red' }} to="/home"><Button color="inherit">Home</Button></Link> <br />
            {!admin && <Box>
                <Link style={{ textDecoration: "none", color: 'red' }} to={`${url}`}><Button color="inherit">Dashboard</Button></Link>
                <Link style={{ textDecoration: "red", color: 'red' }} to="/myorders"><Button color="inherit">My Orders</Button></Link> <br />
                <Link style={{ textDecoration: "none", color: 'red' }} to="/payment"><Button color="inherit">pay</Button></Link> <br /></Box>}

            {admin && <Box>
                <Link style={{ textDecoration: "none", color: 'red' }} to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link style={{ textDecoration: "none", color: 'red' }} to={`${url}/manageAllOrders`}><Button color="inherit">Manage All Orders</Button></Link>
                <Link style={{ textDecoration: "none", color: 'red' }} to={`${url}/addProducts`}><Button color="inherit">Add Products</Button></Link></Box>}
            {user.email && <Box><Typography variant="h5" sx={{ color: 'goldenrod', fontWeight: 700 }}>{user.displayName}</Typography> <img style={{ border: '2px solid gray', borderRadius: '50px', width: 50 }} src={user.photoURL} alt="" /> <br /><Button onClick={logOut} sx={{ mt: 1 }} variant="contained">LogOut</Button> </Box>}

            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"

                sx={{ bgcolor:'gray',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                 
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{fontWeight:700}} variant="h6" noWrap component="div">
                        DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        bgcolor:'gray',
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}


export default DashBoard;
