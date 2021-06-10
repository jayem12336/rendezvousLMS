import React from 'react'

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { AppBar, Grid, makeStyles, Toolbar, Typography } from '@material-ui/core'
import logo from '../../../components/assets/graduation.png'

const useStyles = makeStyles((theme) => ({

    guideContainer: {
        display: "flex",
        marginTop: 80,
        marginLeft: 60

    },
    imageStyle: {
        height: 100,
        width: 100,
        
    },
    textStyle: {
        marginTop: 80,
        marginLeft:20,
        padding:10
    },
    margin:{
        marginLeft:40
    }

}))

export default function GuideContent() {
    const classes = useStyles();
    return (
        <ClipDrawer>
            <Grid container alignItems="center" alignContent="center" spacing={5}>
                <AppBar position="static" color='secondary'>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Guide
                    </Typography>
                    </Toolbar>
                </AppBar>

                <Grid container alignItems='center' alignContent='center' >
                    <Grid container >
                        <Grid item className={classes.guideContainer}>
                            <img src={logo} alt="photo1" className={classes.imageStyle} />
                        </Grid>
                        <Grid item className={classes.textStyle}>
                            <Typography>Step 1:</Typography>
                            <Typography className={classes.margin}>Make sure to create your Account first</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item className={classes.guideContainer}>
                            <img src={logo} alt="photo2" className={classes.imageStyle} />
                        </Grid>
                        <Grid item className={classes.textStyle}>
                            <Typography>Step 1:</Typography>
                            <Typography className={classes.margin}>Make sure to create your Account first</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item className={classes.guideContainer}>
                            <img src={logo} alt="photo3" className={classes.imageStyle} />
                        </Grid>
                        <Grid item className={classes.textStyle}>
                            <Typography>Step 1:</Typography>
                            <Typography className={classes.margin} >Make sure to create your Account first</Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
        </ClipDrawer>
    )
}
