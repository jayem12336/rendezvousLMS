import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import { useLocalContext } from "../context/context";
import { makeStyles } from '@material-ui/core/styles'
import { Close } from "@material-ui/icons"
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import firebase from '../utils/firebase'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    margin: {
        marginTop: 20
    },
    dialogContainer: {
        padding: 20,
        margin: "40px auto",
        borderColor: 'none',
    },
    PaperStyle: {
        height: 250,
        width: 500,
        padding: 20
    },
    closebtn: {
        fontSize: 50,
    },
    iconContainer: {
        marginTop: 20,
        marginLeft: 20,
        cursor: 'pointer'
    }

}))
export default function JoinCForgatlass() {

    const classes = useStyles();

    const {
        createForgotDialog,
        setCreateForgotDialog,
    } = useLocalContext();

    const [values, setValues] = useState({
        email: "",
        errors: "",
        isLoading: true,
    })

    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    const forgotBtn = (e) => {
        e.preventDefault();
        if (values.email === "") {
            alert('Please Fill up the email')
        } else {
            firebase.auth().sendPasswordResetEmail(values.email)
                .then(() => {
                    // Password reset email sent!
                    // ..
                    alert('Please check your email...')
                    setCreateForgotDialog(false);

                })
                .catch((error) => {
                    var errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                });
        }
    }

    return (
        <div>
            <Dialog
                fullScreen
                open={createForgotDialog}
                onClose={() => setCreateForgotDialog(false)}
            >
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Grid container className={classes.closebtnContainer}>
                        <IconButton className={classes.iconContainer} onClick={() => setCreateForgotDialog(false)}>
                            <Close
                                className={classes.closebtn}
                            />
                        </IconButton>
                    </Grid>
                    <Grid container className={classes.dialogContainer} justify='center' alignItems='center' alignContent='center'>

                        <Paper elevation={10} className={classes.PaperStyle}>
                            <Grid align='center'>
                                <h2 style={{ color: 'black', marginBottom: 20, marginTop: 20 }}>
                                    Forgot Password your Rendezvous Account
                                </h2>
                            </Grid>
                            <Grid item>
                                <Typography>Enter your email to recover your account</Typography>
                                <TextField
                                    className={classes.margin}
                                    placeholder="Email"
                                    variant="outlined"
                                    onChange={handleChange("email")}
                                    value={values.email}
                                    margin="normal"
                                    autoFocus={true}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <MailOutlineIcon style={{ color: 'blue' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    className={classes.margin}
                                    fullWidth
                                    style={{ backgroundColor: "#3bd44b" }}
                                    onClick={forgotBtn}
                                >
                                    Recover
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
};
