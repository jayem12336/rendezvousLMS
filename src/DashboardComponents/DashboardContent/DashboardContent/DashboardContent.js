import React from 'react'

// Material ui Components
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';

const useStyles = makeStyles((theme) => ({
    dashboariconStyle: {
        color: 'black',
        fontSize: '1.9rem',
        marginRight: "15px",
    },
    gridcontainer: {
        marginTop: 35,
        display: "flex",
        padding: 20,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }
}));


export default function DashboardContent() {

    const classes = useStyles();
    return (
        <div>
            <ClipDrawer>
                <Grid container justify="center" alignItems="center" alignContent="center" spacing={5}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                    DASHBOARD
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid container className={classes.gridcontainer} justify='space-between'>
                    <Grid item>
                        <Typography>June 2, 2021</Typography>
                        <Typography style={{ marginTop: 5 }}>Subject: Data Structure</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ marginTop: 30 }}>Assignment #01:</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ marginTop: 30 }}>Deadline:June 6, 2021</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={{ marginTop: 15, }} color="primary">VIEW</Button>
                    </Grid>
                </Grid>
                <Grid container className={classes.gridcontainer} justify='space-between'>
                    <Grid item>
                        <Typography>June 2, 2021</Typography>
                        <Typography style={{ marginTop: 5 }}>Subject: Data Structure</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ marginTop: 30 }}>Assignment #01:</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ marginTop: 30 }}>Deadline:June 6, 2021</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" style={{ marginTop: 15, }} color="primary">VIEW</Button>
                    </Grid>
                </Grid>
            </ClipDrawer>
        </div>
    )
}
