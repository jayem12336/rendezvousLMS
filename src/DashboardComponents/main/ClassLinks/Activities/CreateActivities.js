import React from 'react'
import ClipDrawer from '../../../Dashboardcomponent/Clipdrawer'
import ClassDrawer from '../../../main/ClassDrawer/ClassDrawer';
import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid, Button, TextField } from "@material-ui/core";
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
    },
    deadlineContainer: {
        padding: 15,
        border: "1px solid grey",
    }
}))

export default function CreateActivities({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const assign = () =>{
        history.push(`/${classData.classcode}/assignactivities`)
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
                </ClassDrawer>
            </ClipDrawer>
        </div>
    )
}
