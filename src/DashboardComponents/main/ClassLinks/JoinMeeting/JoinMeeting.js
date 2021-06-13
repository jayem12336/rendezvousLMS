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
    },
    btnStyle: {
        width: 60,
        height: 40,
        margin: 5
    }
}))

export default function JoinMeeting({ classData }) {

    const history = useHistory();

    const classes = useStyles();


    const create = () => {
        history.push('/createactivities')
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
                <ClassDrawer>
                    <Grid container justify="center" alignItems="center" style={{ marginTop: 20, padding: 40 }}>
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
                                        <TextField id="outlined-basic1" variant="outlined" fullWidth/>
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
                                        <TextField id="outlined-basic1" variant="outlined" fullWidth/>
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
                </ClassDrawer>
            </ClipDrawer>
        </div>
    )
}
