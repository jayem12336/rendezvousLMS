import React, { useState } from 'react'

//Material-ui components
import { makeStyles } from '@material-ui/core/styles';
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

const drawerWidth = 90


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    }

}));


function Classroom() {
    const classes = useStyles()

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
                <BsPlusCircle style={{color: 'black',fontSize: '1.9rem'}} />
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
            </Menu>
        </div>
    );
}

export default function ClassContent() {

    const classes = useStyles();

    return (
        <div>
            <ClipDrawer>
                <Grid container alignItems="center" alignContent="center" justifyContent="center" spacing={6}>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                                Class
                            </Typography>
                            <Classroom />
                        </Toolbar>
                    </AppBar>
                </Grid>
            </ClipDrawer>
        </div>
    )
}
