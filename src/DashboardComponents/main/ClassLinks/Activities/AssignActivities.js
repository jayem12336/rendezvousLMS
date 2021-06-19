import React from 'react';

import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { DataGrid } from '@material-ui/data-grid'
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
    }
}))

const columns = [
    { field: 'id', headerName: 'Select All', width: 150 },
    { field: 'email', headerName: 'Name', width: 500 },
    { field: 'first_name', headerName: 'Email', width: 200 },
];

const rows = [
    { id: 1, email: 'Snow', Name: 'Jon'},
    { id: 2, email: 'Snow', Name: 'Jon' },
  ];

export default function AssignActivities({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const prev = () => {
        history.push(`/${classData.classcode}/activities`)
    }
    const assign = () => {
        history.push(`/${classData.classcode}/createactivities`)
    }

    return (
        <div>
            <SampleDrawer classData={classData}>
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
                                    rows={rows}
                                    columns={columns}
                                    checkboxSelection
                                    autoHeight
                                />
                            </Grid>
                            <Grid container justify="space-between">
                                <Grid item sm={6} style={{ padding: 20 }}>
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
                                <Grid item sm={6} style={{ padding: 20 }}>
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
            </SampleDrawer>
        </div>
    )
}
