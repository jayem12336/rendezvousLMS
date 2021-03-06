import React, { useState } from 'react'

//Material-ui components
import {
    makeStyles,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

//React-icons
import { BsPlusCircle } from "react-icons/bs";

//size of sidevar drawer
import AppBar from '@material-ui/core/AppBar';
import { useLocalContext } from '../../../context/context'
import { Grid } from '@material-ui/core';
import ClipDrawer from '../../Dashboardcomponent/Clipdrawer';

//Create and Join Class
import CreateClass from '../../CreateClass/CreateClass'
import JoinClass from '../../JoinClass/JoinClass'
import CreateSchoolForm from '../CreateSchoolForm/CreateSchoolForm';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginTop: 5
    },
    btnClasses: {
        marginLeft: '10px auto',
        marginRight: 30,
        marginTop: 7,
        fontSize: 18,
        height: '70px',
        width: '170px',
        '&:hover': {
            background: '#4877c2',
        }
    }

}));

const Classroom = () => {
        
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const {
        setCreateClassDialog,
        setJoinClassDialog,
        setCreateSchoolDialog
    } = useLocalContext();

    const handleCreate = () => {
        handleClose()
        setCreateClassDialog(true)
    }

    const handleJoin = () => {
        handleClose()
        setJoinClassDialog(true)
    }

    const handleCreateSchool = () => {
        setCreateSchoolDialog(true)
    }

    return (
        <div style={{ marginLeft: 'auto', marginRight: '20px', marginTop: 15 }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <BsPlusCircle style={{ color: 'black', fontSize: '1.9rem'}} />
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleJoin}>
                    Join Class
                </MenuItem>
                <MenuItem onClick={handleCreate}>
                    Create Class
                </MenuItem>
                <MenuItem onClick={handleCreateSchool}>
                    Create School
                </MenuItem>
            </Menu>
        </div>
    );
}

export default function ClassContent( {children} ) {

    //BreakPoint
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    const {
        setCreateClassDialog,
        setJoinClassDialog,
        setCreateSchoolDialog
    } = useLocalContext();

    const handleCreate = () => {
        setCreateClassDialog(true)
    }

    const handleJoin = () => {
        setJoinClassDialog(true)
    }

    const handleCreateSchool = () => {
        setCreateSchoolDialog(true)
    }

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" justify="center" spacing={6}>
                    <AppBar position="static" color='secondary' style={{height: 80}}>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                RENDEZVOUS CLASSROOM
                            </Typography>
                            {isMatch ? <Classroom /> : <>
                                <Button className={classes.btnClasses} onClick={handleClick} color="inherit">
                                    JOIN
                                    </Button>
                                <Menu
                                    id='simple-menu'
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >

                                    <MenuItem onClick={handleJoin}>
                                        JOIN CLASSROOM
                                  </MenuItem>
                                    <MenuItem onClick={handleJoin}>
                                        JOIN SCHOOL
                                      </MenuItem>
                                </Menu>
                                <Button className={classes.btnClasses} onClick={handleCreate} color="inherit">
                                    CREATE CLASS
                                </Button>
                                <Button className={classes.btnClasses} onClick={handleCreateSchool} color="inherit">
                                    CREATE SCHOOL
                                </Button>
                            </>
                            }
                        </Toolbar>
                    </AppBar>
                </Grid>
                <CreateClass />
                <JoinClass />
                <CreateSchoolForm />
                {children}
            </ClipDrawer>
        </div>
    )
}
