import React, { useState } from 'react'
import {
    List,
    Drawer,
    ListItem,
    ListItemText,
    ListItemIcon,
    IconButton,
    makeStyles
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import { FiBookOpen } from 'react-icons/fi';
import { RiMoneyPoundCircleFill } from 'react-icons/ri';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { ImHappy } from 'react-icons/im';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { FaRegRegistered } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    menuIconContainer: {
        marginLeft: 'auto',
    },
    icons: {
        fontSize: '1.5rem',
        marginTop: "5px",
        marginLeft: "15px",
        marginRight:"20px"
    },
}));

export default function DrawerComponent() {

    const classes = useStyles();

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                anchor='left'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}
            >
                <List>
                    <ListItem divider button>
                        <ListItemIcon>
                            <FiBookOpen className={classes.icons} />
                            <ListItemText>Home</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <RiMoneyPoundCircleFill className={classes.icons} />
                            <ListItemText>Faqs</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <BsFillPersonPlusFill className={classes.icons} />
                            <ListItemText>Guide</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ImHappy className={classes.icons} />
                            <ListItemText>Smile</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <VpnKeyIcon className={classes.icons} />
                            <ListItemText>Login</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <FaRegRegistered className={classes.icons} />
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
        </>
    )
}
