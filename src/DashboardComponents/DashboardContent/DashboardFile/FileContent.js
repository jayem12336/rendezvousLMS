import React, { useState, useEffect } from 'react'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
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
        marginLeft: 350,
        marginTop: 50,
        width: 800,
    },

}));

const columns = [
    { field: 'id', headerName: 'Date', width: 150 },
    { field: 'email', headerName: 'File Name', width: 400 },
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
                    <Grid container className={classes.fileContainer} align="center" alignItems="center" alignContent="center">
                        <DataGrid
                            rows={state.user}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            autoHeight
                            loading={state.isLoading}
                        />
                    </Grid>

                </Grid>
            </ClipDrawer>
        </div>
    )
}
