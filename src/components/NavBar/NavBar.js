import React, { useState } from 'react'
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    makeStyles,
    useMediaQuery,
    useTheme,
    Grid,
    Divider
} from '@material-ui/core'

import { FiBookOpen } from 'react-icons/fi'
import { RiMoneyPoundCircleFill } from 'react-icons/ri'
import {
    BsFillPersonPlusFill,
    BsFillBrightnessHighFill
} from 'react-icons/bs'
import { ImHappy } from 'react-icons/im'
import { FaCss3Alt } from "react-icons/fa";
import DrawerComponent from './DrawerComponent/DrawerComponent'
import Logindialog from '../dialog/Logindialog';
import Login from '../Login'

const useStyles = makeStyles((theme) => ({
    icons: {
        fontSize: '1.4rem'
    },
    iconLogo: {
        color: 'yellow',
        fontSize: '3rem'
    },
    accountButton: {
        height: '55px',
        width: '80px',
        marginLeft: 'auto',
        '&:hover': {
            background: '#4877c2',
        }
    },
    navContainer: {
        paddingLeft: '8%',
        paddingRight: '8%'
    },
    tabContainer: {

    }
}))
export default function NavBar() {

    //BreakPoint
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleClickTab = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <Grid className={classes.navContainer}>
                <AppBar color='primary' position='static'>
                    <Toolbar>
                        <Typography>
                            <FaCss3Alt className={classes.iconLogo} />
                        </Typography>
                        <Typography style={{ marginLeft: '10px', fontSize: '20px' }}>
                            Rendezvous
                    </Typography>
                        {isMatch ? <DrawerComponent /> : (
                            <>
                                <Tabs onChange={handleClickTab} indicatorColor='secondary' value={value}>
                                    <Tab
                                        style={{ fontSize: '10px' }}
                                        icon={<FiBookOpen className={classes.icons} />}
                                        disableRipple
                                        label="Courses"
                                    />
                                    <Tab
                                        style={{ fontSize: '10px' }}
                                        icon={<RiMoneyPoundCircleFill className={classes.icons} />}
                                        disableRipple
                                        label="Fees"
                                    />
                                    <Tab
                                        style={{ fontSize: '10px' }}
                                        icon={<BsFillPersonPlusFill className={classes.icons} />}
                                        disableRipple
                                        label="Parent Account"
                                    />
                                    <Tab
                                        style={{ fontSize: '10px' }}
                                        icon={<ImHappy className={classes.icons} />}
                                        disableRipple
                                        label="Holidays"
                                    />
                                    <Tab
                                        style={{ fontSize: '10px' }}
                                        icon={<BsFillBrightnessHighFill className={classes.icons} />}
                                        disableRipple
                                        label="About"
                                    />
                                </Tabs>
                                <Logindialog title="Register Here">
                                    <Login />
                                </Logindialog>
                                <Divider orientation="vertical" flexItem style={{ marginLeft: 'auto' }} />
                                <Button
                                    disableRipple
                                    color='inherit'
                                    className={classes.accountButton}
                                >
                                    Signup
                                </Button>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    )
}
