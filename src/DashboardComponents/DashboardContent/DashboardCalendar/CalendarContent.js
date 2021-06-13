import React from 'react'
import "./style.css";

import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars'
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

export default function CalendarContent() {

    const dateValue = new Date(new Date().getFullYear(), new Date().getMonth(), 20);
    const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 6);
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25);

    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" spacing={5}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar>
                            <Typography variant="h6">
                                CALENDAR
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Grid>
                <Grid container alignItems="center" alignContent="center">
                    <CalendarComponent
                        value={dateValue}
                        min={startDate}
                        max={endDate}
                        start="Decade"
                        style={{ marginTop: 30,}}
                    ></CalendarComponent>
                </Grid>
            </ClipDrawer>
        </div>
    )
}
