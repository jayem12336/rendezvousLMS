import React, { useState, useEffect } from 'react'
import ClipDrawer from '../../../Dashboardcomponent/Clipdrawer'
import ClassDrawer from '../../../main/ClassDrawer/ClassDrawer';
import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid, Button } from "@material-ui/core";
import { MdArrowBack } from 'react-icons/md';
import { DataGrid } from '@material-ui/data-grid'

import { db } from '../../../../utils/firebase'

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
    fileContainer: {
        padding: 20,
        justifyContent: 'center',
        width: 1000
    },
}))

const columns = [
    { field: 'id', headerName: 'Date', width: 150 },
    { field: 'email', headerName: 'File Name', width: 500 },
    { field: 'first_name', headerName: 'File Size', width: 200 },
];

export default function People({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const [state, setState] = useState({
        user: [],
        isLoading: false
    })

    useEffect(() => {

        const fetchData = () => {
            db.collection("users")
                .onSnapshot((doc) => {

                    let userList = [];
                    doc.forEach((user) => {
                        userList.push({ ...user.data(), id: user.id });
                    })
                    setState({ user: userList, isLoading: false })
                })
        }
        fetchData();
    }, [])

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
                    <Grid container justify="center" alignItems="center" style={{ marginTop: 20, padding: 40, }}>
                        <Grid container alignItems="center" justify="center" >
                            <Grid container justify="flex-end" style={{width: '90%', padding: 20 }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    REQUEST
                                </Button>
                            </Grid>
                            <Grid container justify='center'>
                                <Grid container className={classes.fileContainer} justify='center'>
                                    <DataGrid
                                        rows={state.user}
                                        columns={columns}
                                        checkboxSelection
                                        autoHeight
                                        loading={state.isLoading}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ClassDrawer>
            </ClipDrawer>
        </div>
    )
}
