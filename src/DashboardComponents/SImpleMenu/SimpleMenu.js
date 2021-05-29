import React from 'react'
import firebase from '../../utils/firebase'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles((theme) => ({
    iconLogo: {
        color: 'skyblue',
        fontSize: '3rem',
    },
}));


const SimpleMenu = () => {
    const history = useHistory();

    const logout = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            history.push('/nonuserhome');

        }).catch((error) => {
            // An error happened.
        });

    }

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ marginLeft: 'auto', marginRight: '20px' }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                <AccountCircleIcon className={classes.iconLogo} />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                style={{ marginTop: "40px" }}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={logout}>Log Out</MenuItem>
            </Menu>
        </div>
    )
}

export default SimpleMenu
