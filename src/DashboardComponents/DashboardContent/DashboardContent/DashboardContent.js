import React from 'react'

import { Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';
import NotificationsIcon from '@material-ui/icons/NotificationsActiveTwoTone'
import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';

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

    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" justifyContent="center" spacing={4}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                DashBoard
                            </Typography>
                            <AddIcon className={classes.dashboariconStyle} />
                            <NotificationsIcon className={classes.dashboariconStyle} />
                            <MoreVertIcon className={classes.dashboariconStyle} />
                        </Toolbar>
                    </AppBar>
                </Grid>
            </ClipDrawer>
        </div>
    )
}
