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

const useStyles = makeStyles((theme) => ({
    menuIconContainer: {
        marginLeft: 'auto'
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
                            <ListItemText>Courses</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Fees</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Parent Account</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Holidays</ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    <ListItem divider button>
                        <ListItemIcon>
                            <ListItemText>Logout</ListItemText>
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
