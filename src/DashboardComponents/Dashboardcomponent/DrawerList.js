import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Class';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HistoryIcon from '@material-ui/icons/History';

//Logo 
import Logo from '../../components/assets/RendezvousLogo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(2),
    },
    listItemIcon: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-10px',
        flexDirection: 'column'
    },
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem'
    },
    iconLogo: {
        marginTop: '-25px',
        marginLeft: '-16px',
        height: '80px',
        width: '70px'
    },
}));

function NestedList() {

    const classes = useStyles();

    return (
        <Grid container>
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem button
                    component={Link}
                    to='/dashboardcontent'>
                    <img src={Logo} alt="logo" className={classes.iconLogo} />
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardcontent'>
                    <ListItemIcon className={classes.listItemIcon} >
                        <DashboardIcon />
                        Dash
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardclass'
                >
                    <ListItemIcon className={classes.listItemIcon}>
                        <ClassIcon />
                        Class
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardcalendar'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CalendarTodayIcon />
                        Calendar
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardfile'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <HistoryIcon />
                        File
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardabout'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                            About
                        </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardfaqs'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <ClassIcon />
                            Faqs
                        </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardguide'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CalendarTodayIcon />
                            Guide
                        </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/dashboardsmile'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <HistoryIcon />
                            Smile
                        </ListItemIcon>
                </ListItem>
            </List>
        </Grid>
    );
}

export default function DrawerList() {
    return (
        <div>
            <NestedList />
        </div>
    )
}
