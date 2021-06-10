import React, { useState } from "react";

import { Button, Dialog, Grid, InputAdornment, TextField, Paper, IconButton, Typography } from "@material-ui/core";
import { useLocalContext } from "../context/context";
import { makeStyles } from '@material-ui/core/styles'
import { Close } from "@material-ui/icons"
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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

    return (
        <div>
            <Dialog
                fullScreen
                open={createForgotDialog}
                onClose={() => setCreateForgotDialog(false)}
            >
                <Grid container justify='center' alignItems='center' alignContent='center'>
                    <Grid container className={classes.closebtnContainer}>
                        <IconButton className={classes.iconContainer}>
                            <Close
                                className={classes.closebtn}
                                onClick={() => setCreateForgotDialog(false)}
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
                                    size="large"
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
                                    size="large"
                                    fullWidth
                                    style={{ backgroundColor: "#3bd44b" }}
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
