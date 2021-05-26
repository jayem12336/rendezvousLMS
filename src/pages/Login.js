import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import firebase from '../utils/firebase'

import { makeStyles } from '@material-ui/core/styles'
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
    CircularProgress
} from '@material-ui/core'
import { Visibility, VisibilityOff } from "@material-ui/icons"

import { Alert } from "@material-ui/lab"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        maxWidth: "700px",
        width: '400px',
        maxHeight: '1000px'
    },
    errorMessage: {
        margin: "10px "
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    fields: {
        margin: theme.spacing(1),
    }
}))

export default function Login() {

    const classes = useStyles();

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

    const handleClickShowPassword = (e) => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
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
                    
                })
                .catch((error) => {
                    //var errorCode = error.code;
                    var errorMessage = error.message;

                    setValues({ ...values, errors: errorMessage, isLoading: false })
                });
        };
    }
    if (values.isLoading) {
        return (
            <div className={classes.root}>
                <CircularProgress color="primary" size={200} />
            </div>
        );
    }
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                {values.errors && (
                    <Alert className={classes.errorMessage} severity="error">
                        {values.errors}
                    </Alert>)}
                <Card>
                    <form className={classes.loginForm}>
                        <TextField
                            className={classes.fields}
                            id="email"
                            label="Email Address"
                            variant="outlined"
                            value={values.email}
                            onChange={handleChange("email")}
                        />
                        <FormControl className={classes.fields} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                label="Password"
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
                        <Button
                            className={classes.fields}
                            variant="contained"
                            color="secondary"
                            onClick={login}
                        >Login</Button>
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
                            to="/signup"
                        >Signup</Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
