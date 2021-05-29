import React, { useState, } from 'react'

import { useHistory } from 'react-router-dom'
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
    Dialog
} from '@material-ui/core'

import { Close, Visibility, VisibilityOff } from "@material-ui/icons"

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
        maxWidth: "700px",
        width: '400px',
        maxHeight: '1000px',
        padding: "10px 10px 20px 10px"

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
    },
    closebtn: {
        position: "absolute",
        top: "20px",
        right: "8px",
        cursor: "pointer"

    },
    closebtnContainer: {
        display: "flex",
        height: "40px",
        marginTop: "15px",
        padding: "0 10px"
    },
    textStyle: {
        fontSize: "20px"
    }
}))

export default function Login() {

    const classes = useStyles();
    const history = useHistory();

    const { createLoginDialog, setCreateLoginDialog, createRegisterDialog, setCreateRegisterDialog } = useLocalContext();

    const [check, setChecked] = useState(false);

    const [showForm, setShowForm] = useState(false);


    const [values, setValues] = useState({
        email: "",
        password: "",
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
            maxWidth={showForm ? "lg" : "xs"}
            className="form__dialog"
        >
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.closebtnContainer}>
                        <Typography className={classes.textStyle}>Login Here</Typography>
                        <Close
                            className={classes.closebtn}
                            onClick={() => setCreateLoginDialog(false)}
                        />
                    </div>

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
                                color="secondary"
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
                                    color="secondary"
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
                                variant="h7"
                                color="secondary"
                                align="center"

                            >Forgot Password</Typography>
                            <Button
                                className={classes.fields}
                                variant="contained"
                                color="inherit"
                                //component={Link}
                                to="/signup"
                                onClick={() => {
                                    setCreateLoginDialog(false);
                                    setCreateRegisterDialog(true);
                                }}
                            >Signup</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </Dialog>
    )
}
