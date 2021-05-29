import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import DrawerList from '../Dashboardcomponent/DrawerList'

const drawerWidth = 70

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
