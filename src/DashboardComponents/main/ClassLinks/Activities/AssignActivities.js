import React, { useState } from 'react'
import ClipDrawer from '../../../Dashboardcomponent/Clipdrawer'
import ClassDrawer from '../../../main/ClassDrawer/ClassDrawer';
import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";
import { MdArrowBack } from 'react-icons/md';
import { DataGrid } from '@material-ui/data-grid'

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

const columns = [
    { field: 'id', headerName: 'Select All', width: 150 },
    { field: 'email', headerName: 'Name', width: 500 },
    { field: 'first_name', headerName: 'Email', width: 200 },
];

export default function AssignActivities({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const [state, setState] = useState({

        user: [],
        isLoading: false
    })

    const prev = () =>{
        history.push('/activities')
    }
    const assign = () =>{
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
                        <Grid container alignItems="center">
                            <Grid container className={classes.gridcontainer} justify='space-between'>
                                <Grid container>
                                    <Typography variant="subtitle1">
                                        Assign:
                                    </Typography>
                                </Grid>
                                <Grid container>
                                    <DataGrid
                                        rows={state.user}
                                        columns={columns}
                                        checkboxSelection
                                        autoHeight
                                        loading={state.isLoading}
                                    />
                                </Grid>
                                <Grid container justify="space-between">
                                    <Grid item sm={6} style={{padding:20}}>
                                        <Grid container justify="flex-start">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={prev}
                                            >
                                                Prev
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={6} style={{padding:20}}>
                                        <Grid container justify="flex-end">
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={assign}
                                            >
                                                Assign
                                            </Button>
                                        </Grid>
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
