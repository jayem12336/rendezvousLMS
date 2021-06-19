import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { DataGrid } from '@material-ui/data-grid';

import { db } from '../../../../utils/firebase';
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
    },
    fileContainer: {
        padding: 20,
        justifyContent: 'center',
        width:'100%'
    },
}))

const columns = [
    { field: 'id', headerName: 'Date', width: 150 },
    { field: 'email', headerName: 'File Name', width: 470 },
    { field: 'first_name', headerName: 'File Size', width: 200 },
];

export default function People({ classData }) {

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
            <SampleDrawer classData={classData}>
                <Grid container justify="center" alignItems="center" style={{ padding: 40, }}>
                    <Grid container alignItems="center" justify="center" >
                        <Grid container justify="flex-end" style={{ width: '100%', padding: 20 }}>
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
            </SampleDrawer>
        </div>
    )
}
