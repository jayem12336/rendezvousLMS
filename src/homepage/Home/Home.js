import React, { useState } from 'react'

//Material ui
import {
    Grid,
    makeStyles,
    Paper,
    Typography,
    Tabs,
    Tab,
    useMediaQuery,
    useTheme
} from '@material-ui/core'

//Component Navbar
import NavBar from '../../components/NavBar/NavBar'

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
        maxWidth: '1700px',
        backgroundColor: '#80baed',
        paddingTop: '20px',
        maxHeight: '800px'
    },
    paperContainer: {
        justifyContent: 'space-around',
        maxWidth: '1700px',
        backgroundColor: 'gray',
        paddingTop: '20px',
        height: '200px'
    }

}));

export default function Home() {

    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    const classes = useStyles();

    const [value, setValue] = React.useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
                <Grid container container alignContent='center' alignitem='center' justify='center' className={classes.paperContainer}>

                </Grid>
            </Grid>
        </Grid>
    )
}
