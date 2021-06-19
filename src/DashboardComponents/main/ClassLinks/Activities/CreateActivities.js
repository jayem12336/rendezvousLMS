import React from 'react'
import { useHistory } from 'react-router-dom'

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
        border: "1px solid grey",
    },
    deadlineContainer: {
        padding: 15,
        border: "1px solid grey",
    }
}))

export default function CreateActivities({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const assign = () => {
        history.push(`/${classData.classcode}/assignactivities`)
    }

    return (
        <div>
            <SampleDrawer classData={classData}>
                <Grid container justify="center" alignItems="center" style={{ padding: 40 }}>
                    <Grid container alignItems="center">
                        <Grid container className={classes.gridcontainer} justify='space-between'>
                            <Grid container justify="flex-start">
                                <Typography variant="subtitle1">
                                    Title :
                                </Typography>
                                <TextField
                                    variant="outlined"
                                >
                                </TextField>
                            </Grid>
                            <Grid container>
                                <Typography variant="subtitle1">
                                    Instruction :
                                </Typography>
                            </Grid>
                            <Grid container style={{ paddingLeft: 40 }}>
                                <TextField
                                    variant="outlined"
                                    fullWidth

                                >
                                </TextField>
                            </Grid>
                            <Grid container justify="flex-start" >
                                <Grid item sm={6}>
                                    <Grid container style={{ padding: 40, width: "40%" }}>
                                        <Typography variant="subtitle1">
                                            Deadline :
                                        </Typography>
                                        <Grid container className={classes.deadlineContainer}>
                                            dsadagaga
                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item sm={6}>
                                    <Grid container style={{ padding: 40, width: "40%" }}>

                                        <Typography variant="subtitle1">
                                            Total Points :
                                        </Typography>

                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                        >

                                        </TextField>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid container justify="flex-start" style={{ paddingTop: 20 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    onClick={assign}
                                >
                                    Next
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SampleDrawer>
        </div>
    )
}
