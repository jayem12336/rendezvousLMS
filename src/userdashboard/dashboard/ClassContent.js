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
import { BsPlusCircle } from "react-icons/bs";

//size of sidevar drawer
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import DrawerList from './DrawerList'
import Simplemenu from '../SImpleMenu/SimpleMenu'
import NotificationsIcon from '@material-ui/icons/Notifications';

import CreateClass from '../CreateClass/CreateClass'
import JoinClass from '../JoinClass/JoinClass'
import { useLocalContext } from '../../context/context'
import { Grid } from '@material-ui/core';

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
        color: 'black',
        fontSize: '1.9rem',
    },
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }

}));


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

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerContainer}>
                    <DrawerList />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Grid container alignItems="center" alignContent="center" justifyContent="center" spacing={6}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Class
                         </Typography>
                            <Classroom />
                        </Toolbar>
                    </AppBar>
                </Grid>

            </main>
            <CreateClass />
            <JoinClass />

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
