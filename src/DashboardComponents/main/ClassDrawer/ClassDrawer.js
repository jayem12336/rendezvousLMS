import React from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DuoIcon from '@material-ui/icons/Duo';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(8) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function SampleDrawer({ children, classData }) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Grid container justify="center">
                        <Typography variant="h6" noWrap>
                            {classData.classname}
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <Typography style={{ marginRight: 30 }}>Rendezvous</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem
                        button
                        component={Link}
                        to={`/${classData.classcode}/announcement`}

                    >
                        <ListItemIcon> <AnnouncementIcon color="primary" /></ListItemIcon>
                        <ListItemText>Announcement</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to={`/${classData.classcode}/activities`}
                    >
                        <ListItemIcon> <FormatListBulletedIcon color="primary" /></ListItemIcon>
                        <ListItemText>Activities</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to={`/${classData.classcode}/quizzes`}
                    >
                        <ListItemIcon> <AssessmentIcon color="primary" /></ListItemIcon>
                        <ListItemText>Quizzes/Exams</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to={`/${classData.classcode}/joinmeeting`}
                    >
                        <ListItemIcon> <DuoIcon color="primary" /></ListItemIcon>
                        <ListItemText>Join Meeting</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to={`/${classData.classcode}/people`}
                    >
                        <ListItemIcon> <PeopleIcon color="primary" /></ListItemIcon>
                        <ListItemText>People</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to={`/${classData.classcode}/settings`}
                    >
                        <ListItemIcon> <SettingsIcon color="primary" /></ListItemIcon>
                        <ListItemText>Settings</ListItemText>
                    </ListItem>
                    <ListItem
                        button
                        component={Link}
                        to={'/dashboardclass'}
                    >
                        <ListItemIcon> <ExitToAppIcon color="primary" /></ListItemIcon>
                        <ListItemText>Back</ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}
