import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hooks/UseAuth';
import { Button } from '@mui/material';
import UserCart from './UserCart/UserCart';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AdminRoute from '../Shared/AdminRoute/AdminRoute';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import ManageUsers from '../Admin/ManageUsers/ManageUsers';
import AddProducts from '../Admin/AddProducts/AddProducts';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import Review from './Reeview/Review';
import Payment from './Payment/Payment';

const drawerWidth = 240;

/* Main */
const Dashboard = (props) => {

    const { user, admin, logout } = useAuth();
    let { path, url } = useRouteMatch();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link to='/explore'><Button sx={{ width: '75%', m: 1 }} variant='contained'>Back to Explore</Button></Link>
            <Link to={`${url}`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>My orders</Button></Link>
            <Link to={`${url}/review`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>Review</Button></Link>
            <Link to={`${url}/payment`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>Payment Method</Button></Link>
            {admin &&
                <Box>
                    <Divider />
                    <Link to={`${url}/admin`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>Make Admin</Button></Link>
                    <Link to={`${url}/manageusers`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>Manage Users</Button></Link>
                    <Link to={`${url}/manageproducts`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>Manage Orders</Button></Link>
                    <Link to={`${url}/add`}><Button sx={{ width: '75%', m: 1 }} variant='contained'>Add a Product</Button></Link>
                </Box>}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button onClick={logout} sx={{ width: '75%', m: 1 }} variant='contained'>Logout</Button>
            {/* <List>
                {['Home', 'My Orders', 'Review', 'Payment Method', 'Logout'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
            {/*<Divider />
             <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
                sx={{
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
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}'s dashboard
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
                        <UserCart></UserCart>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>

                    {/* Admin Routes */}
                    <AdminRoute path={`${path}/admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageusers`}>
                        <ManageUsers></ManageUsers>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};
export default Dashboard;