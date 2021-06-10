import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import DrawerList from '../Dashboardcomponent/DrawerList'

const drawerWidth = 80

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        overflow:'hidden'
    },
    drawerPaper: {
        width: drawerWidth,
        overflow:'hidden' 
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2.1),
        overflow:'hidden' 
    },
}));

export default function ClipDrawer( {children} ) {

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
                {children}
            </main>
        </div>
    )
}
