import React, { useState } from 'react'

import firebase, { db } from '../utils/firebase'

import { useHistory } from 'react-router-dom'

import { makeStyles, Grid, Icon } from '@material-ui/core'

import {
    Button,
    TextField,
    Typography,
    InputAdornment,
    Dialog,
    CircularProgress,
    Link
} from '@material-ui/core'

import { Close } from "@material-ui/icons"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { FcGoogle } from 'react-icons/fc';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';

import Logo from '../components/assets/RendezvousLogo.png'
import { useLocalContext } from '../context/context'

import { Alert } from "@material-ui/lab"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh"
    },
    pageWrapper: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        maxWidth: "700px",
        width: '400px',
        maxHeight: '1000px',
        padding: "10px 10px 20px 10px"
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100px'
    },
    errorMessage: {
        fontSize: 15,
    },
    fields: {
        margin: theme.spacing(1),
        "@media (max-width: 600px)": {
            fontSize: "1rem",
            width: '240px',
            minWidth: '100px',
            marginLeft: '80px'
        },
    },
    closebtn: {
        position: "absolute",
        top: "15px",
        right: "20px",
        cursor: "pointer",
        "@media (max-width: 600px)": {
            position: "absolute",
            top: "15px",
            right: "15px"
        },
    },
    closebtnContainer: {
        display: "flex",
        marginTop: "15px",
        padding: 10
    },
    textStyle: {
        fontSize: "20px",
        "@media (max-width: 600px)": {
            fontSize: "1.5 rem",
            width: '240px',
            minWidth: '100px',
            marginLeft: '80px',
        },
    },
    dialogContainer: {
        padding: 20,
        margin: "40px auto",
        borderColor: 'none',
        height: '650px',
    },
    dialog: {
        borderRadius: '40px',
        padding: 20,
        height: '860px',
        margin: "-50px auto",
        width: 420,
        "@media (max-width: 600px)": {
            width: 300,
        },
    },
    margin: {
        marginTop: 15
    },
    googleBtn: {
        marginTop: 10,
        fontSize: 15,
        "@media (max-width: 600px)": {
            fontSize: 10,
        },
    },
    iconStyle: {
        height: 100,
        width: 100,
        marginTop: -100,
        marginBottom: 20
    },
}))

export default function Signup() {

    const classes = useStyles();

    const history = useHistory();

    const { setCreateLoginDialog, createRegisterDialog, setCreateRegisterDialog } = useLocalContext();

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        isLoading: false,
        errors: "",
        firstname: "",
        lastname: "",
        photo_url: ""
    })

    

    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    const handleClickShowPassword = (e) => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    }

    const signup = (e) => {

        e.preventDefault();

        if (!values.email || !values.password || !values.confirmPassword || !values.firstname || !values.lastname) {
            setValues({ ...values, errors: "Please Complete all fields" })
        } else if (values.password !== values.confirmPassword) {
            setValues({ ...values, errors: "Password do not match!" })
        }
        else {
            setValues({ ...values, errors: "" })

            firebase
                .auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .then((userCredential) => {
                    firebase.auth().onAuthStateChanged(function (user) {
                        db.collection("users").doc(user.uid).set({
                            email: values.email,
                            first_name: values.firstname,
                            last_name: values.lastname,
                            photo_url: values.photo_url
                        })
                            .then(() => {
                                console.log("Document successfully written!");
                            })
                            .catch((error) => {
                                console.error("Error writing document: ", error);
                            });
                        setValues({ isLoading: false });
                        history.push('/dashboardcontent')
                        setCreateRegisterDialog(false);
                    })
                })
                .catch((error) => {
                    //var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    setValues({ ...values, errors: errorMessage, isLoading: false })
                });
        }
    }

    if (values.isLoading) {
        return (
            <div className={classes.root}>
                <CircularProgress color="primary" size={200} />
            </div>
        );
    }
    

    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={createRegisterDialog}
            className={classes.dialog}
            onClose={() => setCreateRegisterDialog(false)}
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
                            onClick={() => setCreateRegisterDialog(false)}
                        />
                    </Grid>
                    <Grid align='center'>
                        <Icon>
                            <img src={Logo} className={classes.iconStyle} alt="Rendezvous" />
                        </Icon>
                        <h2 style={{ color: 'black', marginTop: -40, marginBottom: 20 }}>
                            Create Rendezvous Account

                        </h2>
                    </Grid>
                    {values.errors && (
                        <Alert className={classes.errorMessage} severity="error">
                            {values.errors}
                        </Alert>)}
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <form onSubmit={signup}>
                            <TextField
                                className={classes.margin}
                                label="FIRST NAME"
                                placeholder="First Name"
                                variant="outlined"
                                onChange={handleChange("firstname")}
                                value={values.firstname}
                                size="medium"
                                margin="normal"
                                autoFocus={true}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PermIdentityIcon style={{ color: 'blue' }} />
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
                                label="LAST NAME"
                                placeholder="Last Name"
                                variant="outlined"
                                onChange={handleChange("lastname")}
                                value={values.lastname}
                                size="medium"
                                margin="normal"
                                autoFocus={true}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PermIdentityIcon style={{ color: 'blue' }} />
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
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
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
                            <TextField
                                className={classes.margin}
                                label="CONFIRM PASSWORD"
                                placeholder="Confirm Password"
                                variant="outlined"
                                onChange={handleChange("confirmPassword")}
                                value={values.confirmPassword}
                                type={values.showPassword ? 'text' : 'password'}
                                size="medium"
                                margin="normal"
                                autoFocus={true}
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
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                className={classes.margin}
                                type="submit"
                                fullWidth
                            >
                                CREATE ACCOUNT
                            </Button>
                            <h2 style={{textAlign:"center", marginTop:10}}>or</h2>
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.googleBtn}
                                startIcon={<FcGoogle />}
                                fullWidth
                            >
                                Sign up with google
                            </Button>
                            <Typography style={{ textAlign: 'center', fontSize: '15px', marginTop: '20px' }} >
                                Already have a account?
                            <Link
                                    to="/login"
                                    onClick={() => {
                                        setCreateLoginDialog(true);
                                        setCreateRegisterDialog(false);
                                    }}
                                    style={{ textDecoration: 'none' }}>
                                    <span style={{
                                        color: 'blue',
                                        fontSize: '15px',
                                        cursor: 'pointer'
                                    }}>Login</span>
                                </Link>
                            </Typography>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    )
}
