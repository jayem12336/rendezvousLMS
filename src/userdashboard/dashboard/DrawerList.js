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
import { FaCss3Alt } from 'react-icons/fa';

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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem'
    },
}));

function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <Grid container>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
            >
                <ListItem button
                    component={Link}
                    to='/dashboardcontent'>
                    <ListItemIcon className={classes.listItemIcon} >
                        <FaCss3Alt className={classes.iconLogo} />
                    </ListItemIcon>
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
                    to='/classcontent'
                >
                    <ListItemIcon className={classes.listItemIcon}>
                        <ClassIcon />
                        Class
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/calendarcontent'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CalendarTodayIcon />
                        Calendar
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/filecontent'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <HistoryIcon />
                        File
                    </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/aboutcontent'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <DashboardIcon />
                            About
                        </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/faqscontent'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <ClassIcon />
                            Faqs
                        </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/guidecontent'>
                    <ListItemIcon className={classes.listItemIcon}>
                        <CalendarTodayIcon />
                            Guide
                        </ListItemIcon>
                </ListItem>
                <ListItem button
                    component={Link}
                    to='/smilecontent'>
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
