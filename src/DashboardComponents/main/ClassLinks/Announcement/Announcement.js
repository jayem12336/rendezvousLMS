import React from 'react'

import ClipDrawer from '../../../Dashboardcomponent/Clipdrawer'
import ClassDrawer from '../../../main/ClassDrawer/ClassDrawer';

import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";
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

export default function Announcement({ classData }) {

    const history = useHistory();

    const classes = useStyles();
    
    return (
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
                <Grid container justify="center" alignItems="center" style={{ marginTop: 20 }}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid>
                            <Typography variant="subtitle1">
                                06-02-2021 05:20PM
                            </Typography>
                        </Grid>
                        <Grid container className={classes.gridcontainer} justify='space-between'>
                            <Grid item>
                                <Typography variant="subtitle1">Lorem Ipsum</Typography>
                                <Typography style={{ marginTop: 5 }}>dsadsadsadsadsadsdsadsdasadsadsad</Typography>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{marginTop: 20, borderRadius: 30}}>
                            <Button variant="contained" color="primary">Announce</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </ClassDrawer>
        </ClipDrawer>
    )
}
