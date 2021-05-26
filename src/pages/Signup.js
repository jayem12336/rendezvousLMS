import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../utils/firebase'

import { makeStyles } from '@material-ui/core/styles'
import { Card, Button, FormControl, TextField, Typography, OutlinedInput, InputLabel, InputAdornment, IconButton } from '@material-ui/core'
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
    loginForm: {
        display: 'flex',
        flexDirection: 'column'
    },
    errorMessage: {
        margin: "10px "
    },
    fields: {
        margin: theme.spacing(1),
    }
}))

export default function Signup() {
    const classes = useStyles();

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
        errors: "",
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
        if (!values.email || !values.password || !values.confirmPassword) {
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
                })
                .catch((error) => {
                    //var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                    setValues({ ...values, errors: errorMessage })
                });
        }
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
                        >Log In</Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}
