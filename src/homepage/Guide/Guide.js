import React from 'react'

//Material ui
import {
    Grid,
    makeStyles,
    Typography,
} from '@material-ui/core'

//Component Navbar
import NavBar from '../../components/NavBar/NavBar'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        paddingBottom: '20px',
        maxWidth: '2000px'
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
        marginTop: '65px'
    },
    paperStyle: {
    }

}));

export default function Guide() {

    const classes = useStyles();

    return (
        <Grid container alignContent='center' alignitem='center' justify='center'>
            <NavBar />
            <Grid className={classes.root} container alignContent='center' alignitem='center' justify='center'>
                <Grid container alignContent='center' alignitem='center' justify='center' className={classes.gridContainer}>
                    <Grid container alignContent='center' alignitem='center' justify='center' style={{ padding: '100px' }}>
                        <Typography variant='h3' color='primary'>Guide</Typography>
                        <Grid container alignContent='center' alignitem='center' justify='center' style={{ marginTop: '20px' }}>
                            <Typography variant='subtitle1'>
                                Step 1: Make sure to create your account first.
                            </Typography>
                        </Grid>
                        <Grid container alignContent='center' alignitem='center' justify='center' style={{ marginTop: '20px' }}>
                            <Typography variant='subtitle1' color='primary'>
                                Step 2: If you are a student, wait for your teacher until they send the code of the classroom.
                            </Typography>
                        </Grid>
                        <Grid container alignContent='center' alignitem='center' justify='center' style={{ marginTop: '5px' }}>
                            <Typography variant='subtitle1'>
                                If you are a teacher, make a classroom and invite your students.
                            </Typography>
                        </Grid>
                        <Grid container alignContent='center' alignitem='center' justify='center' style={{ marginTop: '5px' }}>
                            <Typography variant='subtitle1'>
                                If you are a school admin, you can request a schoolroom in the website and start making appointments to your school.
                            </Typography>
                        </Grid>
                        <Grid container alignContent='center' alignitem='center' justify='center' style={{ marginTop: '20px' }}>
                            <Typography variant='subtitle1'>
                                Step 2: A online learning management platform for new normal education system and make appointment for school activities.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
