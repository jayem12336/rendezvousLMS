import React from 'react'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import logo from '../../../components/assets/RendezvousLogo.png'

const useStyles = makeStyles((theme) => ({

    aboutContainer: {
        marginTop: 80,
        marginLeft: 60,
        display: "flex",
    },
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
    text: {
        fontSize: 20,
        textAlign: "center",
        padding: 20
    },
    aboutInfoContainer: {
        marginTop: 40,
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
                <Grid container alignItems='center' alignContent='center' spacing={3}>
                    <Grid item sm={6}>
                        <Grid container justify='center'>
                            <img src={logo} alt="photo1" className={classes.imageStyle} />
                        </Grid>
                    </Grid>
                    <Grid item sm={6}>
                        <img src={logo} alt="photo1" className={classes.imageStyle} />
                    </Grid>
                </Grid>
            </Grid>
        </ClipDrawer>
    )
}
