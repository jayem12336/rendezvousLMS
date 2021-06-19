import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'
import firebase from '../utils/firebase'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Close } from "@material-ui/icons"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Logo from '../components/assets/RendezvousLogo.png'

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


import { Alert } from "@material-ui/lab"

import { useLocalContext } from '../context/context'
import Forgot from './Forgot'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: "10px 10px 20px 10px",
    },
    errorMessage: {
        marginTop: -35,
        fontSize: 15
    },
    closebtn: {
        position: "absolute",
        top: "20px",
        right: "20px",
        cursor: "pointer",
    },
    closebtnContainer: {
        display: "flex",
        marginTop: "15px",
        padding: "0 10px"
    },
    textStyle: {
        fontSize: "20px",
    },
    dialogContainer: {
        padding: 20,
        margin: "40px auto",
        borderColor: 'none',
    },
    dialog: {
        borderRadius: '40px',
        padding: 20,
        margin: "0px auto",
        width: 400,
        height: '700px',
        "@media (max-width: 600px)": {
            width: 320
        },
    },
    iconStyle: {
        height: 100,
        width: 100,
        marginTop: -50,
    },
    margin: {
        marginTop: 10
    },
}))

export default function Login() {

    const classes = useStyles();

    const history = useHistory();

    const {
        createLoginDialog,
        setCreateLoginDialog,
        setCreateRegisterDialog,
        setCreateForgotDialog,
    } = useLocalContext();

    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
        errors: "",
        isLoading: false,
    })

    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleForgot = () => {
        setCreateForgotDialog(true);
    }

    const login = (e) => {

        e.preventDefault();

        setValues({ ...values, isLoading: true });

        if (!values.email || !values.password) {
            setValues({ ...values, errors: "Please Complete all fields", isLoading: false, password: "" })
        }
        else {
            firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                .then((userCredential) => {
                    // Signed  
                    //var user = userCredential.user;
                    // ...
                    setValues({ ...values, errors: "", isLoading: false })
                    history.push('/dashboardcontent')
                    setCreateLoginDialog(false);
                })
                .catch((error) => {
                    //var errorCode = error.code;
                    var errorMessage = error.message;
                    setValues({ ...values, errors: errorMessage, isLoading: false, password: "" })
                });
        };
    }
    if (values.isLoading) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                justifyItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: 'white'
            }}>
                <CircularProgress color="primary" size={200} />
            </div>
        );
    }

    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={createLoginDialog}
            className={classes.dialog}
            onClose={() => setCreateLoginDialog(false)}
            maxWidth={false}
            PaperProps={{
                style: {
                    borderRadius: 30,
                }
            }}
        >
            <Grid container justify='center' alignItems='center' alignContent='center'>
                <Grid className={classes.dialogContainer}>
                    <Grid container className={classes.closebtnContainer}>
                        <Close
                            className={classes.closebtn}
                            onClick={() => setCreateLoginDialog(false)}
                        />
                    </Grid>
                    <Grid align='center'>
                        <Icon>
                            <img src={Logo} className={classes.iconStyle} alt="Rendezvous" />
                        </Icon>
                        <h2 style={{ color: 'black', marginBottom: 50 }}>
                            Login your Rendezvous <br />
                        </h2>
                    </Grid>
                    {values.errors && (
                        <Alert className={classes.errorMessage} severity="error">
                            {values.errors}
                        </Alert>)}
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <form onSubmit={login}>
                            <TextField
                                className={classes.margin}
                                label="EMAIL"
                                placeholder="Email"
                                variant="outlined"
                                onChange={handleChange("email")}
                                value={values.email}
                                size="medium"
                                margin="normal"
                                autoFocus={true}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon style={{ color: 'blue' }} />
                                        </InputAdornment>
                                    ),
                                    className: classes.textSize
                                }}
                                InputLabelProps={{
                                    className: classes.labelStyle
                                }}
                            />
                            <TextField
                                className={classes.margin}
                                label="PASSWORD"
                                placeholder="Password"
                                variant="outlined"
                                onChange={handleChange("password")}
                                value={values.password}
                                type={values.showPassword ? 'text' : 'password'}
                                size="medium"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon style={{ color: 'blue' }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                    className: classes.textSize
                                }}
                                InputLabelProps={{
                                    className: classes.labelStyle
                                }}
                            />
                            <Typography style={{
                                color: 'blue',
                                fontSize: '14px',
                                marginTop: 12,
                                marginLeft: 136
                            }}
                                component={Button}
                                onClick={handleForgot}
                            >
                                Forgot Password?
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.margin}
                                type="submit"
                                size="medium"
                                fullWidth
                            >
                                LOGIN
                            </Button>
                            <Typography style={{ textAlign: 'center', fontSize: '15px', marginTop: '20px' }} >
                                Don't have account?
                                <Link
                                    to="/signup"
                                    onClick={() => {
                                        setCreateLoginDialog(false);
                                        setCreateRegisterDialog(true);
                                    }}
                                    style={{ textDecoration: 'none' }}>
                                    <span style={{
                                        color: 'blue',
                                        fontSize: '15px',
                                        cursor: 'pointer'
                                    }}>create here</span>
                                </Link>
                            </Typography>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
            <Forgot />
        </Dialog>
    )
}
