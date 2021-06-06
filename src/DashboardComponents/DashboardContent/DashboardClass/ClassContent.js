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

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginTop: 5
    },
    btnClasses: {
        marginLeft: '10px auto',
        marginRight: 30,
        marginTop: 5,
        fontSize: 18,
        height: '60px',
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
        
    } = useLocalContext();

    const handleCreate = () => {
        handleClose()
        setCreateClassDialog(true)
    }

    const handleJoin = () => {
        handleClose()
        setJoinClassDialog(true)
    }


    return (
        <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <BsPlusCircle style={{ color: 'black', fontSize: '1.9rem' }} />
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
                <MenuItem onClick={handleCreate}>
                    Create School
                </MenuItem>
            </Menu>
        </div>
    );
}

export default function ClassContent() {

    //BreakPoint
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    const {
        setCreateClassDialog,
        setJoinClassDialog,
    } = useLocalContext();

    const handleCreate = () => {
        setCreateClassDialog(true)
    }

    const handleJoin = () => {
        setJoinClassDialog(true)
    }

    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" justify="center" spacing={6}>
                    <AppBar position="static" color='secondary'>
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Rendezvous Classroom
                            </Typography>
                            {isMatch ? <Classroom /> : <>
                                <Button className={classes.btnClasses} onClick={handleCreate}>
                                    Create Class
                                </Button>
                                <Button className={classes.btnClasses} onClick={handleJoin}>
                                    Join Class
                                    </Button>
                                <Button className={classes.btnClasses} onClick={handleCreate}>
                                    Create School
                                </Button>
                            </>
                            }
                        </Toolbar>
                    </AppBar>
                </Grid>
                <CreateClass />
                <JoinClass />
            </ClipDrawer>
        </div>
    )
}
