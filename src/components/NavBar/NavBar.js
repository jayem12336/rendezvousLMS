import React from 'react'

//React router
import { useHistory } from 'react-router-dom'

//Material ui Components

import { makeStyles, useTheme} from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

//React-icons
import { AiOutlineHome } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { RiContactsLine } from 'react-icons/ri'
import { ImNotification } from 'react-icons/im'

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
        zIndex:100

    },
    customizeToolbar: {
        height: '20px',
        color: '#000000',
        borderBlockStart: '',
        margin: '10px',
        justifyContent: 'center',
    },
    accountButton: {
        height: '55px',
        width: '100px',
        fontSize: '17px',
        marginLeft: 'auto',
        '&:hover': {
            background: '#4877c2',
            color: 'white'
        }
    },
    textTabs: {
        fontSize: '15px',
        fontWeight: 'bold',
        color: 'black',
        '&:hover': {
            background: '#4877c2',
            color: 'white'
        }
    }

}))
export default function NavBar() {

    //BreakPoint
    const theme = useTheme();

    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();

    const history = useHistory();

    const {
        setCreateLoginDialog,
        setCreateRegisterDialog,
    } = useLocalContext();

    const handleLogin = () => {
        setCreateLoginDialog(true)
    }

    const handleRegister = () => {
        setCreateRegisterDialog(true)
    }

    return (
        <Grid container alignContent='center' alignitem='center' justify='center' className={classes.root}>
            <Grid className={classes.navContainer}>
                <AppBar color='primary' position="static" /**className={classes[navRef.current]} */ style={{ backgroundColor: 'white' }}>
                    <Toolbar className={classes.customizeToolbar}>
                        <Typography>
                            <Icon>
                                <img src={Logo} alt="logo" className={classes.iconLogo} />
                            </Icon>
                        </Typography>
                        <Typography style={{ fontSize: '25px', fontWeight: 'bold' }}>
                            Rendezvous
                        </Typography>
                        {isMatch ? <DrawerComponent /> : (
                            <>
                                {/* onChange={handleClickTab} indicatorColor='primary' value={value} */}
                                <Tabs
                                    style={{ marginLeft: '70px' }}
                                    textColor='secondary'
                                    variant="scrollable"
                                >
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<AiOutlineHome className={classes.icons} />}
                                        disableRipple
                                        label="Home"
                                        onClick={() => history.push('/home')}
                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<BsBook className={classes.icons} />}
                                        disableRipple
                                        label="Guide"
                                        onClick={() => history.push('/guide')}
                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<RiContactsLine className={classes.icons} />}
                                        label="Contact"
                                        onClick={() => history.push('/contact')}
                                    />
                                    <Tab
                                        className={classes.textTabs}
                                        icon={<ImNotification className={classes.icons} />}
                                        disableRipple
                                        label='About'
                                        onClick={() => history.push('/about')}
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
