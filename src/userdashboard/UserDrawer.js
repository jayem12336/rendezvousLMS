import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import { FaCss3Alt } from "react-icons/fa";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import DrawerList from '../userdashboard/DrawerList'

const drawerWidth = 90

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem'
    },
}));

function Simplemenu() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <AccountCircleIcon className={classes.iconLogo} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{marginTop:"40px"}}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

function ClippedDrawer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography>
                        <FaCss3Alt className={classes.iconLogo} />
                    </Typography>
                    <Typography style={{ marginLeft: '10px', fontSize: '20px' }}>
                        Rendezvous
                    </Typography>

                    <Simplemenu />
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <DrawerList />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                
            </main>
        </div>
    );
}

export default function UserDrawer() {
    return (
        <div>
            <ClippedDrawer />
        </div>
    )
}
