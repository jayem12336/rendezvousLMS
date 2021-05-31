import React, { useState, useEffect } from 'react'

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
    Divider,
    Button,
    Icon    
} from '@material-ui/core'

//React router
import { Link } from 'react-router-dom'

//React-icons
import { FiBookOpen } from 'react-icons/fi'
import { RiMoneyPoundCircleFill } from 'react-icons/ri'
import {
    BsFillPersonPlusFill,
    BsFillBrightnessHighFill
} from 'react-icons/bs'
import { ImHappy } from 'react-icons/im'

//Components
import DrawerComponent from './DrawerComponent/DrawerComponent'
import Login from '../../pages/Login'
import Signup from '../../pages/Signup'

//Popup dialog
import { useLocalContext } from '../../context/context'

//Logo 
import Logo from '../assets/RendezvousLogo.png'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icons: {
        fontSize: '1.5rem'
    },
    iconLogo: {
        height: '80px',
        width: '100px'
    },
    navContainer: {
        width: '100%',
        maxHeight: '100px',
        position: 'fixed',
        backgroundColor: "#fff",

    },
    customizeToolbar: {
        height: '20px',
        color: '#000000',
        borderBlockStart: '',
        maxWidth: '6400px',
        justifyContent: 'center',
    },
    accountButton: {
        height: '55px',
        width: '80px',
        marginLeft: 'auto',
        '&:hover': {
            background: '#4877c2',
        }
    },
    textTabs: {
        fontSize: '15px',
        fontWeight: 'bold',
        '&:hover': {
            background: '#4877c2',
        }
    }

}))
export default function NavBar() {

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClose = () => setAnchorEl(null);

    const {
        setCreateLoginDialog,
        setCreateRegisterDialog,
    } = useLocalContext();

    const handleLogin = () => {
        handleClose()
        setCreateLoginDialog(true)
        
    }

    const handleRegister = () => {
        handleClose()
        setCreateRegisterDialog(true)
    }

    //BreakPoint
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    return (
        <Grid container alignContent='center' alignitem='center' justify='center' className={classes.root}>
            <Grid className={classes.navContainer}>
                <AppBar color='primary' position="static" /**className={classes[navRef.current]} */ style={{ backgroundColor: 'white' }}> 
                    <Toolbar className={classes.customizeToolbar}>
                        <Typography>
                            <Icon>
                                <img src={Logo} alt="logo" className={classes.iconLogo}/>
                            </Icon>
                        </Typography>
                        <Typography style={{ fontSize: '20px' }}>
                            Rendezvous
                        </Typography>
                        {isMatch ? <DrawerComponent /> : (
                            <>
                                {/* onChange={handleClickTab} indicatorColor='primary' value={value} */}
                                <Tabs style={{ marginLeft: '70px' }}>
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<FiBookOpen className={classes.icons} />}
                                        disableRipple
                                        label="Home"
                                        component={Link}
                                        to='/home'
                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<RiMoneyPoundCircleFill className={classes.icons} />}
                                        disableRipple
                                        label="Faqs"
                                        component={Link}
                                        to='/faqs'
                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<BsFillPersonPlusFill className={classes.icons} />}
                                        label="Guide"
                                        component={Link}
                                        to='/guide'

                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<ImHappy className={classes.icons} />}
                                        disableRipple
                                        label="Smile"
                                        component={Link}
                                        to='/smile'
                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<BsFillBrightnessHighFill className={classes.icons} />}
                                        disableRipple
                                        label="About"
                                        component={Link}
                                        to='/about'
                                    />
                                </Tabs>
                                <Grid style={{ marginLeft: '50px' }}>
                                    <Button
                                        color="inherit"
                                        className={classes.accountButton}
                                        onClick={handleLogin}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                                <Divider orientation="vertical" flexItem style={{ margin: '10px', backgroundColor: 'black' }} />
                                <Grid>
                                    <Button
                                        color="inherit"
                                        className={classes.accountButton}
                                        onClick={handleRegister}
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                            </>
                        )}
                    </Toolbar>
                </AppBar>
                <Login />
                <Signup />
            </Grid>
        </Grid>
    )
}
