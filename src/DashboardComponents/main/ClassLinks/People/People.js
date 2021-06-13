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
    { field: 'Name', headerName: 'Name', width: 300 },
    { field: 'Email', headerName: '', width: 300 },
    { field: 'Class', headerName: 'Class', width: 400 },
    { field: '', headerName: '', width: 200 },
];

export default function People({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const [state, setState] = useState({
        user: [],
        isLoading: false
    })

    const prev = () => {
        history.push('/activities')
    }
    const assign = () => {
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
                <ClassDrawer classData={classData.classcode}>
                    <Grid container justify="center" alignItems="center" style={{ marginTop: 20, padding: 40,  }}>
                        <Grid container alignItems="center" justify="center" >
                            <Grid container justify="flex-end" style={{ marginBottom: 20, width: '90%' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    REQUEST
                                </Button>
                            </Grid>
                            <Grid container style={{width: '90%'}}>
                                <DataGrid
                                    rows={state.user}
                                    columns={columns}
                                    autoHeight
                                    loading={state.isLoading}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </ClassDrawer>
            </ClipDrawer>
        </div>
    )
}
