import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core'
import ClassDrawerList from './ClassDrawerList';

const drawerWidth = 160

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        overflow: 'hidden',
    },
    drawerPaper: {
        width: drawerWidth,
        overflow: 'hidden',
        marginLeft: 81,
        height: 3000,
        marginTop: 61
    },

    content: {
        flexGrow: 1,
        padding: theme.spacing(2.1),
        overflow: 'hidden'
    },
}))

export default function ClassDrawer({ children, classData }) {

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
                    <ClassDrawerList classData={classData}/>
                </div>
            </Drawer>
            <main className={classes.content}>
                {children}
            </main>

        </div>
    )
}
