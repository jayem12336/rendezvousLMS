import React, { useState } from 'react'

//Material ui
import {
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core'

//Component Navbar
import NavBar from '../../components/NavBar/NavBar'

import Graduation from '../../components/assets/graduation.png'
import Chart from '../../components/assets/chart.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        maxWidth: '2000px',
        flexGrow: 1
    },
    textMargin: {
        marginTop: '15px'
    },
    learnButton: {
        marginTop: 20,
        borderRadius: '30px',
        width: "300px",
        fontSize: "14px",
        paddingTop: 10,
        paddingBottom: 10,
        color: "black",
        borderWidth: '3px'
    },
    gridContainer: {
        justifyContent: 'space-around',
        paddingBottom: '250px',
        maxWidth: '1800px',
        backgroundColor: '#80baed',
        paddingTop: '20px',
        maxHeight: '800px'
    },
    paperContainer: {
        justifyContent: 'space-around',
        maxWidth: '1800px',
        backgroundColor: 'gray',
        paddingTop: '20px',
        height: '400px'
    },
    gridStyle: {
        width: "300px",
        padding: "10px",
        backgroundColor: "white"


    },
    imageStyle: {
        height: "200px",
        width: "200px",
        marginTop: "10px",
        marginBottom:"10px",
        borderRadius: "50px"

    },
    imageContainer: {
        alignContent: "center",
        alignitem: "center",
        justifyContent: "center",
        backgroundColor: "lightblue"
    }

}));

export default function Home() {

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    return (
        <Grid container alignContent='center' alignitem='center' justify='center'>
            <NavBar />
            <Grid container alignContent='center' alignitem='center' justify='center' style={{ marginTop: '90px', marginBottom: '20px' }}>
                <Typography variant='h6'>We build community here in Rendezvous</Typography>
                <Grid container alignContent='center' alignitem='center' justify='center'>
                    <Typography variant='caption'>Users: 232   Classrooms: 4233    Schools: 4     Activities: 34324 </Typography>
                </Grid>
            </Grid>
            <Grid className={classes.root} container alignContent='center' alignitem='center' justify='center'>
                <Grid container alignContent='center' alignitem='center' justify='center' className={classes.gridContainer}>
                    <Grid container container alignContent='center' alignitem='center' justify={isMatch ? 'center' : 'flex-start'} style={{ padding: '100px' }}>
                        <Typography variant='h3' color='primary'>RENDEZVOUS</Typography>
                        <Grid container style={{ marginTop: '20px' }}>
                            <Typography variant='subtitle1' color='primary'>A online learning management platform for new normal education system and make appointment for school activities.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container alignContent='center' alignitem='center' justify='center' className={classes.paperContainer}>
                    <Grid item >
                        <Grid className={classes.gridStyle}>
                            <Grid container className={classes.imageContainer} >
                                <img src={Graduation} className={classes.imageStyle} alt='ssadsad'/>
                            </Grid>
                            <Typography style={{ textAlign: "center" }}>Graduation</Typography>
                            <Typography style={{ textAlign: "center" }}>Use Enable to create and manage your own
                            staff training programmer or choose from over 3000</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.gridStyle}>
                            <Grid container className={classes.imageContainer}>
                                <img src={Graduation} className={classes.imageStyle} alt='ssadsad'/>
                            </Grid>
                            <Typography style={{ textAlign: "center" }}>Graduation</Typography>
                            <Typography style={{ textAlign: "center" }}>Use Enable to create and manage your own
                            staff training programmer or choose from over 3000</Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid className={classes.gridStyle}>
                            <Grid container className={classes.imageContainer}>
                                <img src={Chart} className={classes.imageStyle} alt='ssadsad'/>
                            </Grid>
                            <Typography style={{ textAlign: "center" }}>Chart</Typography>
                            <Typography style={{ textAlign: "center" }}>Use Enable to track Learner progress and create a report
                            to monitor training with our customable LMS Reporting</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
