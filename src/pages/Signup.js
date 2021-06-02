import React, { useState } from 'react'

import firebase, { db } from '../utils/firebase'
import { v4 as uuidV4 } from "uuid";

import { useHistory } from 'react-router-dom'

import { makeStyles, Grid } from '@material-ui/core'

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
        fontSize: 12,
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
        padding: "0 10px"
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
        height: '500px',
    },
    dialog: {
        borderRadius: '40px',
        padding: 20,
        height: '730px',
        margin: "-50px auto",
        width: 370,
        "@media (max-width: 600px)": {
            width: 300,
        },
    },
    margin: {
        marginTop: 15
    },
    googleBtn: {
        marginTop: 20,
        fontSize: 12
    }
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
        lastname: ""
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

    const signup = () => {
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
                    // Signed in 
                    //var user = userCredential.user;

                    //console.log(user);

                    // ...
                    const id = uuidV4();

                    db.collection("users").doc(id).set({
                        email: values.email,
                        first_name: values.firstname,
                        last_name: values.lastname
                    })
                        .then(() => {
                            console.log("Document successfully written!");
                        })
                        .catch((error) => {
                            console.error("Error writing document: ", error);
                        });
                    setValues({ isLoading: false });
                    history.push('/userdashboard')
                    setCreateRegisterDialog(false);
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
            PaperProps={{
                style: { borderRadius: 30, }
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
                        <h2 style={{ color: 'blue', marginTop: -40, marginBottom: 20 }}>
                            Create Account <br />
                            <Typography variant='caption' style={{ color: 'black' }}>Create new account</Typography>
                        </h2>
                    </Grid>
                    {values.errors && (
                        <Alert className={classes.errorMessage} severity="error">
                            {values.errors}
                        </Alert>)}
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <form>
                            <TextField
                                className={classes.margin}
                                label="FIRST NAME"
                                placeholder="First Name"
                                variant="outlined"
                                onChange={handleChange("firstname")}
                                value={values.firstname}
                                size="small"
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
                                size="small"
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
                                size="small"
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
                                type="password"
                                placeholder="Password"
                                variant="outlined"
                                onChange={handleChange("password")}
                                value={values.password}
                                size="small"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon style={{ color: 'blue' }} />
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
                                type="password"
                                placeholder="Confirm Password"
                                variant="outlined"
                                onChange={handleChange("confirmPassword")}
                                value={values.confirmPassword}
                                size="small"
                                margin="normal"
                                autoFocus={true}
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon style={{ color: 'blue' }} />
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
                                className={classes.margin}
                                onClick={signup}
                                fullWidth
                            >
                                CREATE ACCOUNT
                            </Button>
                            <Button
                                variant="contained"
                                className={classes.googleBtn}
                                startIcon={<FcGoogle />}
                                fullWidth
                            >
                                Sign in with google
                            </Button>
                            <Typography style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }} >
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
                                        fontSize: '12px',
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
