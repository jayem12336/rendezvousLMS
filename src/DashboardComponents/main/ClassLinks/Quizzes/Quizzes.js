import React from 'react'
import { useHistory } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
    }
}))

export default function Quizzes({ classData }) {

    const history = useHistory();

    const classes = useStyles();


    const create = () => {
        history.push(`/${classData.classcode}/createactivities`)
    }
    return (
        <div>
            <SampleDrawer classData={classData}>
                <Grid container justify="center" alignItems="center" style={{ padding: 40 }}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid container style={{ marginBottom: 20 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={create}
                            >
                                Create Quiz or Exam
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid container justify="space-between">
                            <Typography variant="subtitle1">
                                Date Created: 06-02-2021 05:20PM
                            </Typography>
                            <Typography variant="subtitle1">
                                Type: Quiz
                            </Typography>
                            <Typography variant="subtitle1">
                                End Time: 06-02-2021 05:20PM
                            </Typography>
                        </Grid>

                        <Grid container className={classes.gridcontainer} justify='space-between'>
                            <Grid container justify="space-between">
                                <Typography variant="subtitle1">
                                    Quiz 1: Loren Ipsum
                                </Typography>
                                <Typography variant="subtitle1">
                                    Total Score: 50
                                </Typography>
                            </Grid>
                            <Grid container justify="space-between">
                                <Typography variant="subtitle1">
                                    neque poriodsadagagagahahabjkhkhkjashdkahdsa
                                </Typography>
                                <Typography variant="subtitle1">
                                    Status: Done
                                </Typography>
                            </Grid>
                            <Grid container justify="flex-end">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={create}
                                >
                                    Edit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </SampleDrawer>
        </div>
    )
}
