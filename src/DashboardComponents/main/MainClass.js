import React from "react"

import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import "./style.css";

import { MdArrowBack } from 'react-icons/md';
import ClipDrawer from "../Dashboardcomponent/Clipdrawer";
import ClassDrawer from "./ClassDrawer/ClassDrawer";

const useStyles = makeStyles((theme) => ({
    closebtn: {
        fontSize: 30,
    },
    iconContainer: {
        cursor: 'pointer',
        position: 'absolute',
        left:2,
        paddingLeft: 10
    },
}))

export default function Main({ classData,  }) {

    const history = useHistory();

    const classes = useStyles();

    return (
        <ClipDrawer>
            <Grid container alignItems="center" alignContent="center" spacing={5}>
                <AppBar position="static" color='secondary'>
                    <Toolbar style={{ justifyContent: 'center' }}>
                        <IconButton className={classes.iconContainer} onClick={() => history.push('/dashboardclass')}>
                            <MdArrowBack
                                className={classes.closebtn}
                            />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {classData.classname}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <ClassDrawer classData={classData.classcode}>
            </ClassDrawer>
        </ClipDrawer>
    );
};