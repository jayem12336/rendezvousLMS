import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { FaCss3Alt } from "react-icons/fa";
import DrawerList from './DrawerList'
import Simplemenu from '../SImpleMenu/SimpleMenu'

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
                <h1>File</h1>
            </main>
        </div>
    );
}

export default function FileContent() {
    return (
        <div>
            <ClippedDrawer />
        </div>
    )
}
