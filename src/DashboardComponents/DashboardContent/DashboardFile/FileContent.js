import React, { useState, useEffect } from 'react'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { db } from '../../../utils/firebase'

import { DataGrid } from '@material-ui/data-grid'

const useStyles = makeStyles((theme) => ({

    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw"
    },
    dashboariconStyle: {
        color: 'black',
        fontSize: '1.9rem',
        marginRight: "15px",
    },
    gridcontainer: {
        marginTop: 10,
        width: "100%",
        height: 90,
        display: "flex",
        backgroundColor: "lightblue"
    },
    fileContainer: {
        padding: 20,
        justifyContent: 'center',
        width: 1000
    },

}));

const columns = [
    { field: 'id', headerName: 'Date', width: 150 },
    { field: 'email', headerName: 'File Name', width: 500 },
    { field: 'first_name', headerName: 'File Size', width: 200 },
];

export default function FileContent() {

    const classes = useStyles();

    const [state, setState] = useState({

        user: [],
        isLoading: true
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
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                FILES
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid container justify='center'>
                        <Grid container justify='center' style={{ marginTop: 20, }}>
                            <Typography variant="h5"> RECENT FILES </Typography>
                        </Grid>
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
            </ClipDrawer>
        </div>
    )
}
