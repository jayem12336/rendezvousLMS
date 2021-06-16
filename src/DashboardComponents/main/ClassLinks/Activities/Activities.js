import React from 'react'
import ClipDrawer from '../../../Dashboardcomponent/Clipdrawer'
import ClassDrawer from '../../../main/ClassDrawer/ClassDrawer';
import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid, Button, Link } from "@material-ui/core";
import { MdArrowBack } from 'react-icons/md';

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

export default function Activities({ classData }) {

    const history = useHistory();

    const classes = useStyles();


    const create = () => {
        history.push(`/${classData.classcode}/createactivities`)
    }
    
    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" spacing={5}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar style={{ justifyContent: 'center' }}>
                            <IconButton className={classes.iconContainer} onClick={() => history.push('/dashboardclass')}>
                                <MdArrowBack
                                    className={classes.closebtn}
                                />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                {classData.classname}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <ClassDrawer classData={classData.classcode}>
                    <Grid container justify="center" alignItems="center" style={{ marginTop: 20, padding: 40 }}>
                        <Grid container justify="flex-start" alignItems="center">
                            <Grid container style={{ marginBottom: 20 }}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component={Link}
                                    onClick={create}
                                >
                                    Create Activity
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-start" alignItems="center">
                            <Grid container justify="space-between">
                                <Typography variant="subtitle1">
                                    Date Created: 06-02-2021 05:20PM
                                </Typography>
                                <Typography variant="subtitle1">
                                    Deadline: 06-02-2021 05:20PM
                                </Typography>
                            </Grid>

                            <Grid container className={classes.gridcontainer} justify='space-between'>
                                <Grid container justify="space-between">
                                    <Typography variant="subtitle1">
                                        Activity 2: Loren Ipsum
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Total Score: 100
                                    </Typography>
                                </Grid>
                                <Grid container justify="space-between">
                                    <Typography variant="subtitle1">
                                        neque poriodsadagagagahahabjkhkhkjashdkahdsa
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Status: Undone
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
                </ClassDrawer>
            </ClipDrawer>
        </div>
    )
}