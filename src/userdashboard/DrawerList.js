import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ClassIcon from '@material-ui/icons/Class';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HistoryIcon from '@material-ui/icons/History';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { Notifications } from '@material-ui/icons';

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
    }
}));

function NestedList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

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
                <ListItem button onClick={handleClick}>
                    <ListItemIcon className={classes.listItemIcon}>
                        <MoreHorizIcon />
                    </ListItemIcon>
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
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
                </Collapse>
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
