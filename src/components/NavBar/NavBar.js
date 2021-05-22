import React, { useState } from 'react'
import {
    AppBar,
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

//React-icons
import { FiBookOpen } from 'react-icons/fi'
import { RiMoneyPoundCircleFill } from 'react-icons/ri'
import {
    BsFillPersonPlusFill,
    BsFillBrightnessHighFill
} from 'react-icons/bs'
import { ImHappy } from 'react-icons/im'
import { FaCss3Alt } from "react-icons/fa";

//Components
import DrawerComponent from './DrawerComponent/DrawerComponent'
import Logindialog from '../dialog/Logindialog';
import Login from '../pages/Login'
import Registerdialog from '../dialog/Registerdialog';
import Register from '../pages/Register'

const useStyles = makeStyles((theme) => ({
    icons: {
        fontSize: '1.4rem'
    },
    iconLogo: {
        color: 'yellow',
        fontSize: '3rem'
    },
    navContainer: {
        maxWidth: '1200px',
        width: '1190px'
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
        <Grid container alignContent='center' alignitem='center' justify='center'>
            <Grid className={classes.navContainer}>
                <AppBar color='primary' position='sticky'>
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
                                <Grid style={{marginRight: 'auto'}}>
                                    <Logindialog title="Login Here">
                                        <Login />
                                    </Logindialog>
                                </Grid>  
                                <Divider orientation="vertical" flexItem style={{ margin: '10px', backgroundColor: 'white' }}/>               
                                <Grid style={{marginLeft: 'auto'}}>
                                    <Registerdialog title="Register Here">
                                        <Register />
                                    </Registerdialog>
                                </Grid>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
            </Grid>
        </Grid>
    )
}
