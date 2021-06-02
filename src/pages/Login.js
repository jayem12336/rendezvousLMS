import React, { useState, } from 'react'

import { useHistory } from 'react-router-dom'
import firebase from '../utils/firebase'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Dialog,
    Grid,
    Icon,
    TextField,
    InputAdornment,
    Button,
    Link
} from '@material-ui/core'

import { Close } from "@material-ui/icons"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { DiJqueryLogo } from 'react-icons/di';

import { Alert } from "@material-ui/lab"

import { useLocalContext } from '../context/context'

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
        fontSize: 12
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
        borderColor: 'none'
    },
    dialog: {
        borderRadius: '40px',
        padding: 20,
        height: '600px',
        margin: "30px auto",
        width: 370,
        "@media (max-width: 600px)": {
            width: 300
        },
    },
    iconStyle: {
        height: 80,
        width: 80,
        marginTop: -50,
    }, margin: {
        marginTop: 10
    },

}))

export default function Login() {

    const classes = useStyles();

    const history = useHistory();

    const { createLoginDialog, setCreateLoginDialog, setCreateRegisterDialog } = useLocalContext();

    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
        errors: "",
        isLoading: true,
    })

    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    const login = () => {

        setValues({ ...values, isLoading: true });

        if (!values.email || !values.password) {
            setValues({ ...values, errors: "Please Complete all fields", isLoading: false })
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

                    setValues({ ...values, errors: errorMessage, isLoading: false })
                });
        };
    }
    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={createLoginDialog}
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
                            onClick={() => setCreateLoginDialog(false)}
                        />
                    </Grid>
                    <Grid align='center'>
                        <Icon >
                            <DiJqueryLogo className={classes.iconStyle} />
                        </Icon>
                        <h2 style={{ marginTop: -15, color: 'blue', marginBottom: 50 }}>
                            Welcome Back <br />
                            <Typography variant='caption' style={{ color: 'black' }}>Sign in to continue</Typography>
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
                            <Typography style={{ textAlign: 'end', color: 'blue', fontSize: '12px', marginTop: 12 }}>Forgot Password?</Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.margin}
                                onClick={login}
                                fullWidth
                            >
                                LOGIN
                        </Button>
                            <Typography style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }} >
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
                                        fontSize: '12px',
                                        cursor: 'pointer'
                                    }}>create new account</span>
                                </Link>
                            </Typography>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    )
}
