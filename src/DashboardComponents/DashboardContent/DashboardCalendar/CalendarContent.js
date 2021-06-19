import React from 'react'
import "./style.css";

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({

}))

export default function CalendarContent() {

    const classes = useStyles();

    return (
        <div>
            <ClipDrawer>
                <Grid container justify="center" alignItems="center" alignContent="center" spacing={5} style={{paddingBottom:30}}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Calendar
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                    <FullCalendar
                        defaultView="dayGridMonth" plugins={[dayGridPlugin]}
                        events={[
                            { title: 'US Independence Day', date: '2021-06-04' },
                            { title: 'My Birthday', date: '2021-06-01' }
                        ]}
                    />
            </ClipDrawer>
        </div>
    )
}
