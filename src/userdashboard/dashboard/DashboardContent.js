import React, { useState } from 'react'

import { Divider, Grid, IconButton, TextField, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import DrawerList from './DrawerList'
import { BsPlusCircle } from 'react-icons/bs';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
const drawerWidth = 90

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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
        padding: theme.spacing(2.1),
    },
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem'
    },
    PaperStyle: {
        height: "600px",
        width: "700px"
    },
    textStyle: {
        fontSize: "30px",
        padding: 5
    },
    dashboariconStyle: {
        color: 'black',
        fontSize: '1.9rem',
        marginRight:"15px",
        
    }
}));

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
                <Grid container alignItems="center" alignContent="center" justifyContent="center" spacing={4}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                DashBoard
                         </Typography>
                         <AddIcon className={classes.dashboariconStyle}/>
                         <NotificationsIcon className={classes.dashboariconStyle}/>
                         <MoreVertIcon className={classes.dashboariconStyle}/>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </main>
        </div>
    );
}

export default function DashboardContent() {
    return (
        <div>
            <ClippedDrawer />
        </div>
    )
}
