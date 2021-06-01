import React, { useState } from 'react'

import firebase, { db } from '../utils/firebase'
import { v4 as uuidV4 } from "uuid";

import { useHistory } from 'react-router-dom'

import { makeStyles, Grid } from '@material-ui/core'

import {
    Card,
    Button,
    FormControl,
    TextField,
    Typography,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    IconButton,
    Dialog,
    CircularProgress,
} from '@material-ui/core'

import { Close, Visibility, VisibilityOff } from "@material-ui/icons"

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
        margin: "10px "
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
        top: "20px",
        right: "5px",
        cursor: "pointer",
        "@media (max-width: 600px)": {
            position: "absolute",
            top: "30px",
            right: "15px"
        },
    },
    closebtnContainer: {
        display: "flex",
        height: "40px",
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
        width: '100%',
        maxWidth: '100vw',
        maxHeight: '100%',
        position: 'fixed',
        top: '80%',
        left: '0',
        transform: 'translate(0, 0)',
        overflowY: 'auto'
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
                    setValues({ isLoading: false});
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
            className={classes.dialogContainer}
        >
            <Grid className={classes.pageWrapper}>
                <Grid className={classes.container}>
                    <Grid container className={classes.closebtnContainer}>
                        <Typography className={classes.textStyle}>Register Here</Typography>
                        <Close
                            className={classes.closebtn}
                            onClick={() => setCreateRegisterDialog(false)}
                        />
                    </Grid>
                    {values.errors && (
                        <Alert className={classes.errorMessage} severity="error">
                            {values.errors}
                        </Alert>)}
                    <Card>
                        <Grid className={classes.loginForm}>
                            <TextField
                                className={classes.fields}
                                id="firstname"
                                label="First Name"
                                variant="outlined"
                                color="secondary"
                                value={values.firstname}
                                onChange={handleChange("firstname")}
                            />
                            <TextField
                                className={classes.fields}
                                id="lastname"
                                label="Last Name"
                                variant="outlined"
                                color="secondary"
                                value={values.lastname}
                                onChange={handleChange("lastname")}
                            />
                            <TextField
                                className={classes.fields}
                                id="email"
                                label="Email Address"
                                variant="outlined"
                                color="secondary"
                                value={values.email}
                                onChange={handleChange("email")}
                            />
                            <FormControl className={classes.fields} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    color="secondary"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <FormControl className={classes.fields} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="confirmPassword"
                                    color="secondary"
                                    label="Confirm Password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.confirmPassword}
                                    onChange={handleChange('confirmPassword')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={70}
                                />
                            </FormControl>
                            <Button
                                className={classes.fields}
                                variant="contained"
                                color="secondary"
                                onClick={signup}
                            >Signup</Button>
                            <Typography
                                variant="h6"
                                color="textPrimary"
                                align="center"
                            >OR</Typography>
                            <Button
                                className={classes.fields}
                                variant="contained"
                                color="inherit"
                                //component={Link}
                                to="/login"
                                onClick={() => {
                                    setCreateRegisterDialog(false);
                                    setCreateLoginDialog(true);
                                }}
                            >Log In</Button>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Dialog>
    )
}
