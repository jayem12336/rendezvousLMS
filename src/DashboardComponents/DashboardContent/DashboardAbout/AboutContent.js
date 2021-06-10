import React from 'react'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { AppBar, Grid, makeStyles, Paper, Toolbar, Typography } from '@material-ui/core'
import logo from '../../../components/assets/RendezvousLogo.png'

const useStyles = makeStyles((theme) => ({

    aboutContainer: {
        marginTop: 80,
        marginLeft: 60,
        display: "flex",
    },
    imageStyle: {
        height: 200,
        width: 200,
        position: "absolute",
        left: 510,
        top: 70

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
    text: {
        fontSize: 20,
        textAlign: "center",
        padding: 20
    },
    aboutInfoContainer: {
        marginTop:40,
        marginLeft: 140,
    },

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

                <Grid container alignItems='center' alignContent='center' >
                    <Grid container>
                        <Grid container>
                            <img src={logo} alt="photo1" className={classes.imageStyle} />
                            <Grid container className={classes.aboutContainer}>
                                <Grid item>
                                    <Paper className={classes.paperstyle} elevation={5}>
                                        <Typography className={classes.text}>
                                            Rendezvous is a online platform for new normal education
                                            and provide user friendly environment for Students, Teachers,
                                            and School Admins. The Students can pick an appointment date
                                            and time for his School documents or concern.
                                     </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item style={{ marginLeft: 200, marginTop: 80 }}>

                                    <Typography className={classes.text}>
                                        Mission
                                     </Typography>

                                    <Typography className={classes.text}>
                                        Vission
                                </Typography>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item className={classes.aboutInfoContainer}>
                                    <Typography>Contact Us</Typography>
                                    <Typography>(+63) 992 2313 232</Typography>
                                    <Typography>(+63) 992 2313 232</Typography>
                                </Grid>
                                <Grid item className={classes.aboutInfoContainer}>
                                    <Typography>Email</Typography>
                                    <Typography>Rendezvous@gmail.com</Typography>
                                    <Typography>Rendezvous@gmail.com</Typography>
                                </Grid>
                                <Grid item className={classes.aboutInfoContainer}>
                                    <Typography >Social Media</Typography>
                                    <Typography>Facebook: facebook.com/dv</Typography>
                                    <Typography>Twitter: @rdv</Typography>
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
