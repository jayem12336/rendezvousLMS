import React from 'react'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import logo from '../../../components/assets/RendezvousLogo.png'

const useStyles = makeStyles((theme) => ({

    imageStyle: {
        height: 180,
        width: 180,
    },
    textStyle: {
        marginTop: 80,
        marginLeft: 20
    },
    margin: {
        marginLeft: 40
    },
    paperstyle: {
        width: 800,
        marginTop: 90,
        marginLeft: 80,
    },
    aboutInfoContainer: {
        marginTop: 40,
        marginLeft: 140,
    },
    gridcontainer: {
        display: "flex",
        padding: 50,
        border: "1px solid grey",
    },
    text: {
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10,
        fontSize: 25,
        fontWeight: 500
    }
}))

export default function AboutContent() {
    const classes = useStyles();
    return (
        <ClipDrawer>
            <Grid container alignItems="center" alignContent="center" spacing={5}>
                <AppBar position="static" color='secondary'>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            About
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <Grid container alignItems='center' alignContent='center' spacing={3}>
                <Grid item sm={6}>
                    <Grid container justify='center'>
                        <img src={logo} alt="photo1" className={classes.imageStyle} />
                    </Grid>
                    <Grid container justify='center'>
                        <Typography style={{ textAlign: "center" }}>
                            Rendezvous is a online platform for new normal education and provide
                            user friendly environment for students, teacher and School Administrator.
                            The Student can pick an appointment date and time for his school documents
                            or concern.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={6}>
                    <Grid container justify='center' style={{ marginTop: 100 }}>
                        <Typography className={classes.text}>
                            Mission
                        </Typography>
                        <Typography style={{ textAlign: "center" }}>
                            Rendezvous is a online platform for new normal education and provide
                            user friendly environment for students, teacher and School Administrator.
                            The Student can pick an appointment date and time for his school documents
                            or concern.
                        </Typography>
                    </Grid>
                    <Grid container justify='center'>
                        <Typography className={classes.text}>
                            Vission
                        </Typography>
                        <Typography style={{ textAlign: "center" }}>
                            Rendezvous is a online platform for new normal education and provide
                            user friendly environment for students, teacher and School Administrator.
                            The Student can pick an appointment date and time for his school documents
                            or concern.
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container justify='center' style={{ marginTop: 100}}>
                    <Grid item sm={3}>
                        <Grid container justify='center'>
                            <Typography className={classes.text}>Contact Us</Typography>
                            <Grid container style={{ marginTop: 20 }}>
                                <Grid container justify='center'>
                                    <Typography>(+63) 99231312313</Typography>
                                </Grid>
                                <Grid container justify='center'>
                                    <Typography>(+63) 99231312313</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container justify='center'>
                            <Typography className={classes.text}>Email</Typography>
                            <Grid container style={{ marginTop: 20 }}>
                                <Grid container justify='center'>
                                    <Typography>Rendezvous@gmail.com</Typography>
                                </Grid>
                                <Grid container justify='center'>
                                    <Typography>Rendezvous@yahoo.com</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={3}>
                        <Grid container justify='center'>
                            <Typography className={classes.text}>Social Media</Typography>
                            <Grid container style={{ marginTop: 20 }}>
                                <Grid container justify='center'>
                                    <Typography>Facebook: facebook.com/rdv</Typography>
                                </Grid>
                                <Grid container justify='center'>
                                    <Typography>Twitter: @rdv</Typography>
                                </Grid>
                                <Grid container justify='center'>
                                    <Typography>Instagram: @_rdv</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </ClipDrawer>
    )
}
