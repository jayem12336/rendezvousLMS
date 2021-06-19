import React from 'react'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'

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
        border: "1px solid grey",
        width: 400,
        marginLeft: 15
    }
}))

export default function Settings({ classData }) {

    const classes = useStyles();

    return (
        <SampleDrawer classData={classData}>
            <Grid container justify="center" alignItems="center" style={{ marginTop: 20 }}>
                <Grid container justify="flex-start" alignItems="center">
                    <Grid item style={{ marginTop: 20, borderRadius: 30, margin: 20 }}>
                        <Button variant="contained" color="secondary">DELETE CLASSROOM</Button>
                    </Grid>
                    <Grid item style={{ marginTop: 20, borderRadius: 30, margin: 20 }}>
                        <Button variant="contained" color="secondary">ARCHIVE CLASSROOM</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.gridcontainer} justify="flex-start">
                <Typography>Class Code: </Typography>
                <Typography>{classData.classcode}</Typography>
            </Grid>
        </SampleDrawer>
    )
}
