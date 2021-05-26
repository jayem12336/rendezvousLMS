
import React from 'react'

import { Button, Grid, makeStyles, Typography } from '@material-ui/core'
import NavBar from '../components/navbar/NavBar'

import imageEbook from '../components/assets/Ebooks-PNG.png'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#0973b5',
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
        color: "white",
        borderWidth: '3px'
    }

}));

export default function Home() {

    const classes = useStyles();

    return (
        <Grid container alignContent='center' alignitem='center' justify='center'>
            <Grid className={classes.root} container alignContent='center' alignitem='center' justify='center'>
                <NavBar />
                <Grid container alignContent='center' alignitem='center' justify='center' style={{ paddingTop: '100px', justifyContent: 'space-around', paddingBottom: '250px', maxWidth: '1600px' }}>
                    <Grid item >
                        <Typography variant='h4' color='white'>PowerSchool is Here</Typography>
                        <Typography variant='h4' className={classes.textMargin}>To Help</Typography>
                        <Typography variant='h6' className={classes.textMargin}>PowerSchool School is doing everything we can to make is</Typography>
                        <Typography variant='h6'>easy for districts to get up and running with distance learning.</Typography>
                        <Button variant='outlined' className={classes.learnButton} >
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item >
                        <img src={imageEbook} alt='Ebook' style={{ height: '250px', width: '300px' }} />
                    </Grid>
                </Grid>
                <Grid container alignContent='center' alignitem='center' justify='center' style={{justifyContent: 'space-around', paddingBottom: '290px', maxWidth: '1600px' }}>
                    <Grid item >
                        <Typography variant='h4' color='white'>PowerSchool is Here</Typography>
                        <Typography variant='h4' className={classes.textMargin}>To Help</Typography>
                        <Typography variant='h6' className={classes.textMargin}>PowerSchool School is doing everything we can to make is</Typography>
                        <Typography variant='h6'>easy for districts to get up and running with distance learning.</Typography>
                        <Button variant='outlined' className={classes.learnButton} >
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item >
                        <img src={imageEbook} alt='Ebook' style={{ height: '250px', width: '300px' }} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
