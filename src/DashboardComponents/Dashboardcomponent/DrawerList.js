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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

//Logo 
import Logo from '../../components/assets/RendezvousLogo.png'
import { useLocalContext } from '../../context/context'
import AccountContent from '../DashboardContent/DashboardAccount/AccountContent';
import ManageAccount from '../DashboardContent/DashboardAccount/ManageAccount';

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
        marginLeft: '-5px',
        flexDirection: 'column',
    },
    iconLogo: {
        marginTop: '-25px',
        marginLeft: '-16px',
        height: '80px',
        width: '80px'
    },
}));

function NestedList() {

    const classes = useStyles();

    const {
        setCreateaccountDialog,
    } = useLocalContext();

    const handleProfile = (e) => {
        e.preventDefault();
        setCreateaccountDialog(true)
    }

    return (
        <Grid container>
            <List
                component="nav"
                className={classes.root}
            >
                <ListItem
                    button
                    component={Link}
                    to='/dashboardcontent'>
                    <img src={Logo} alt="logo" className={classes.iconLogo} />
                </ListItem>
                <ListItem
                    button
                    onClick={handleProfile}>
                    <ListItemIcon className={classes.listItemIcon} >
                        <AccountCircleIcon />
                        Profile
                    </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to='/dashboardcontent'>
                    <ListItemIcon className={classes.listItemIcon} >
                        <DashboardIcon />
                        DashBoard
                    </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to='/dashboardclass'
                >
                    <ListItemIcon className={classes.listItemIcon}>
                        <ClassIcon />
                        Class
                    </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to='/dashboardcalendar'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CalendarTodayIcon />
                        Calendar
                    </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to='/dashboardfile'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <HistoryIcon />
                        Files
                    </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to='/dashboardguide'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CalendarTodayIcon />
                            Guide
                        </ListItemIcon>
                </ListItem>
                <ListItem
                    button
                    component={Link}
                    to='/dashboardabout'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                            About
                        </ListItemIcon>
                </ListItem>
            </List>
            <AccountContent />
            <ManageAccount />
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
