import React from 'react'

// Material ui Components
import { Grid, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveTwoTone'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';

import firebase from '../../../utils/firebase'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    dashboariconStyle: {
        color: 'black',
        fontSize: '1.9rem',
        marginRight: "15px",
    }
}));


export default function DashboardContent() {

    const classes = useStyles();

    const logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    
    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" spacing={5}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                DashBoard
                            </Typography>
                            <AddIcon className={classes.dashboariconStyle} />
                            <NotificationsIcon className={classes.dashboariconStyle} />
                            <MoreVertIcon className={classes.dashboariconStyle} />
                        </Toolbar>
                    </AppBar>
                    <Button onClick={logout}>
                        Logout
                    </Button>
                </Grid>
            </ClipDrawer>
        </div>
    )
}
