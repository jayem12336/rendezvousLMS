import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import SampleDrawer from '../../ClassDrawer/ClassDrawer';

const useStyles = makeStyles((theme) => ({
    closebtn: {
        fontSize: 30,
    },
    iconContainer: {
        cursor: 'pointer',
        position: 'absolute',
        left: 2,
        paddingLeft: 10
    },
    gridcontainer: {
        display: "flex",
        padding: 20,
    },
    btnStyle: {
        width: 60,
        height: 40,
        margin: 5
    }
}))

export default function JoinMeeting({ classData }) {

    const classes = useStyles();

    return (
        <div>
            <SampleDrawer classData={classData}>
                <Grid container justify="center" alignItems="center" style={{ padding: 40 }}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid container style={{ marginBottom: 20 }}>
                            <Typography variant="subtitle1">
                                Classroom meeting:
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid container className={classes.gridcontainer} justify='space-between'>
                            <Grid container justify="space-between" spacing={5}>
                                <Grid item sm={6}>
                                    <TextField id="outlined-basic1" variant="outlined" value={classData.classcode} fullWidth />
                                </Grid>
                                <Grid item sm={6}>
                                    <Button variant="contained" color="primary" className={classes.btnStyle}>
                                        Join
                                    </Button>
                                    <Button variant="contained" color="primary" className={classes.btnStyle}>
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.gridcontainer} justify='space-between'>
                            <Grid container justify="space-between" spacing={5}>
                                <Grid item sm={6}>
                                    <TextField id="outlined-basic2" variant="outlined" fullWidth />
                                </Grid>
                                <Grid item sm={6}>
                                    <Button variant="contained" color="primary" className={classes.btnStyle}>
                                        Join
                                    </Button>
                                    <Button variant="contained" color="primary" className={classes.btnStyle}>
                                        Reset
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SampleDrawer>
        </div>
    )
}
