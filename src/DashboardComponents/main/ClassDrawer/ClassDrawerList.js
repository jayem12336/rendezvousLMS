import React from 'react'

import { Link } from 'react-router-dom'

import { makeStyles, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginTop: 20
    },
    nested: {
        paddingLeft: theme.spacing(2),
    },
    listItemIcon: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-5px',
        flexDirection: 'column'
    },
    iconLogo: {
        marginTop: '-25px',
        marginLeft: '-16px',
        height: '80px',
        width: '80px'
    },
    listItem: {
        fontSize: 20
    }
}));


export default function ClassDrawerList({ classData }) {

    const classes = useStyles();

    return (
        <div>
             <Grid container>
                <List
                    component="nav"
                    className={classes.root}
                >
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={`/${classData}/announcement`}
                    >
                        <ListItemIcon className={classes.listItemIcon} >
                            Announcement
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={`/${classData}/activities`}
                    >
                        <ListItemIcon className={classes.listItemIcon} >
                            Activities
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={`/${classData}/quizzes`}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            Quizzes / Exams
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={`/${classData}/joinmeeting`}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            Join Meeting
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={`/${classData}/people`}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            People
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={`/${classData}/settings`}
                    >
                        <ListItemIcon className={classes.listItemIcon}>
                            Settings
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Grid>
        </div>
    )
}
