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
import { FaCss3Alt } from "react-icons/fa";

//Components
import DrawerComponent from './DrawerComponent/DrawerComponent'
import Login from '../../pages/Login'

//Popup dialog
import Logindialog from '../dialog/Logindialog'
import Registerdialog from '../dialog/Registerdialog'
import Signup from '../../pages/Signup'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    icons: {
        fontSize: '1.5rem'
    },
    iconLogo: {
        color: 'yellow',
        fontSize: '3rem'
    },
    navContainer: {
        maxWidth: '1400px',
        width: '100%',
        maxHeight: '100px',
        position: 'fixed',
    },
    appBarTransparent: {
        background: 'transparent',
        boxShadow: 'none',
        transitionDuration: 'ease-in',
        transition: '0.5s',
    },
    appBarSolid: {
        backgroundColor: 'white',
        transitionDuration: 'ease-in',
        transition: '0.5s',
    },
    customizeToolbar: {
        height: '20px',
        color: '#000000',
        borderBlockStart: ''
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

    const [navBackground, setNavBackground] = useState('appBarTransparent');

    const navRef = React.useRef();
    navRef.current = navBackground

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <Grid container alignContent='center' alignitem='center' justify='center' className={classes.root}>
            <Grid className={classes.navContainer}>
                <AppBar color='primary' position="static" className={classes[navRef.current]}>
                    <Toolbar className={classes.customizeToolbar}>
                        <Typography>
                            <FaCss3Alt className={classes.iconLogo} />
                        </Typography>
                        <Typography style={{ marginLeft: '10px', fontSize: '20px' }}>
                            Rendezvous
                        </Typography>
                        {isMatch ? <DrawerComponent /> : (
                            <>
                            {/* onChange={handleClickTab} indicatorColor='primary' value={value} */}
                                <Tabs style={{marginLeft: '100px'}}>
                                    <Tab
                                        style={{ fontSize: '10px', fontWeight: 'bold' }}
                                        icon={<FiBookOpen className={classes.icons} />}
                                        disableRipple
                                        label="Home"
                                        component={Link}
                                        to='/nonuserhome'
                                    />
                                    <Tab
                                        style={{ fontSize: '10px', fontWeight: 'bold' }}
                                        icon={<RiMoneyPoundCircleFill className={classes.icons} />}
                                        disableRipple
                                        label="Faqs"
                                        component={Link}
                                        to='/nonuserfaqs'
                                    />
                                    <Tab
                                        style={{ fontSize: '10px', fontWeight: 'bold' }}
                                        icon={<BsFillPersonPlusFill className={classes.icons} />}
                                        label="Guide"
                                        component={Link}
                                        to='/nonuserguide'

                                    />
                                    <Tab
                                        style={{ fontSize: '10px', fontWeight: 'bold' }}
                                        icon={<ImHappy className={classes.icons} />}
                                        disableRipple
                                        label="Smile"
                                        component={Link}
                                        to='/nonusersmile'
                                    />
                                    <Tab
                                        style={{ fontSize: '10px', fontWeight: 'bold' }}
                                        icon={<BsFillBrightnessHighFill className={classes.icons} />}
                                        disableRipple
                                        label="About"
                                        component={Link}
                                        to='/nonuserabout'
                                    />
                                </Tabs>
                                <Grid style={{marginLeft: '50px'}}>
                                    <Logindialog title="Please Login">
                                        <Login />
                                    </Logindialog>
                                </Grid>
                                <Divider orientation="vertical" flexItem style={{ margin: '10px', backgroundColor: 'black' }} />
                                <Grid>
                                    <Registerdialog title="Signup">
                                        <Signup />
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
