import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

//React-icons
import { AiOutlineHome } from 'react-icons/ai'
import { BsBook , BsCardChecklist } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { ImNotification } from 'react-icons/im'
import { CgLogIn } from 'react-icons/cg';


//Components
import Login from '../../../pages/Login'
import Signup from '../../../pages/Signup'

//Popup dialog
import { useLocalContext } from '../../../context/context'

const useStyles = makeStyles((theme) => ({
    menuIconContainer: {
        marginLeft: 'auto',
    },
    icons: {
        fontSize: '1.5rem',
        marginTop: "5px",
        marginLeft: "15px",
        marginRight: "20px"
    },
}));

export default function DrawerComponent() {

    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);

    const {
        setCreateLoginDialog,
        setCreateRegisterDialog,
    } = useLocalContext();

    const handleLogin = () => {
        setCreateLoginDialog(true)
        setOpenDrawer(false)
    }

    const handleRegister = () => {
        setCreateRegisterDialog(true)
        setOpenDrawer(false)
    }

    return (
        <>
            <Drawer
                anchor='left'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/home'
                    >
                        <ListItemIcon>
                            <AiOutlineHome className={classes.icons} />
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/guide'
                    >
                        <ListItemIcon>
                            <BsBook className={classes.icons} />
                            <ListItemText>Guide</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/contact'
                    >
                        <ListItemIcon>
                            <RiContactsLine className={classes.icons} />
                            <ListItemText>Contact</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        divider
                        button
                        component={Link}
                        to='/About'
                    >
                        <ListItemIcon>
                            <ImNotification className={classes.icons} />
                            <ListItemText>About</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem 
                    divider 
                    button
                    onClick={handleLogin}
                    >
                        <ListItemIcon>
                            <CgLogIn className={classes.icons} />
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem 
                    divider 
                    button
                    onClick={handleRegister}
                    >
                        <ListItemIcon>
                            <BsCardChecklist className={classes.icons} />
                            <ListItemText>Register</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton
                className={classes.menuIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
            <MenuIcon />
            </IconButton>
            <Login />
            <Signup />
        </>
    )
}
