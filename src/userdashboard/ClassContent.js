import React, { useState } from 'react'

//Material-ui components
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

//React-icons
import { FaCss3Alt } from "react-icons/fa";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { BsPlusCircle } from "react-icons/bs";

//size of sidevar drawer
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import DrawerList from '../userdashboard/DrawerList'

import CreateClass from './CreateClass/CreateClass'
import Form from './CreateClass/Form'

import { useLocalContext } from '../context/context'

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
    iconLogoplus: {
        color: 'skyblue',
        fontSize: '2.5rem',
    },
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem',
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
                style={{ marginTop: "40px" }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
        </div>
    );
}
function Classroom() {
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const {
        setCreateClassDialog,
        setJoinClassDialog,
    } = useLocalContext();

    const handleCreate = () => {
        handleClose()
        setCreateClassDialog(true)
    }

    const handleJoin = () => {
        handleClose()
        setJoinClassDialog(true)
    }


    return (
        <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <BsPlusCircle className={classes.iconLogoplus} />

            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleJoin}>
                    Join Class
                            </MenuItem>
                <MenuItem onClick={handleCreate}>
                    Create Class
                            </MenuItem>
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
                <AppBar style={{ marginTop: '60px', width: '100%', maxWidth: '100%' }}>
                    <Toolbar>
                        <Typography style={{ marginLeft: '90px', fontSize: '20px' }}>
                            Class
                    </Typography>
                        <Classroom />
                    </Toolbar>
                </AppBar>
            </main>
            <CreateClass />

        </div>
    );
}

export default function ClassContent() {
    return (
        <div>
            <ClippedDrawer />

        </div>
    )
}
