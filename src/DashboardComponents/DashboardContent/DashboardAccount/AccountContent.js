import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Dialog,
    Grid,
    Button,
    CircularProgress,
    Avatar,
    IconButton
} from '@material-ui/core'

import { CameraAltOutlined, Close } from "@material-ui/icons"

import { useLocalContext } from '../../../context/context'

import firebase, {db} from '../../../utils/firebase'

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
        marginBottom: 5
    },
    dialogContainer: {
        padding: 20,
        margin: "40px auto",
        borderColor: 'none',
    },
    dialog: {
        width: 400,
        height: '480px',
        "@media (max-width: 600px)": {
            width: 340
        },
    },
    iconStyle: {
        height: 100,
        width: 100,
        marginBottom: 20
    },
    margin: {
        marginTop: 10
    },
    cameraIcon: {
        position: 'absolute',
        right: 60,
        top: 130,
        backgroundColor: 'white',
        '&:hover': {
            background: '#4877c2',
        }
    }
}))

export default function AccountContent() {

    const classes = useStyles();

    const history = useHistory();

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClose = () => setAnchorEl(null);

    const {
        createLoginDialog,
        setCreateLoginDialog,
        setCreateForgotDialog,
        loggedInMail

    } = useLocalContext();

    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
        errors: "",
        isLoading: false,
        first_name: '',
        last_name: '', 
    });
 
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
                width: '100vw'
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
        >
            <Grid container justify='center' alignItems='center' alignContent='center'>
                <Grid className={classes.dialogContainer}>
                    <Grid container justify='center' alignItems='center' alignContent='center' className={classes.closebtnContainer}>
                        <Close
                            className={classes.closebtn}
                            onClick={() => setCreateLoginDialog(false)}
                        />
                        <Avatar className={classes.iconStyle}>
                        </Avatar>
                        <IconButton className={classes.cameraIcon}>
                            <CameraAltOutlined >
                            </CameraAltOutlined>
                        </IconButton>
                    </Grid>
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <Typography className={classes.textStyle}>
                        </Typography>
                    </Grid>
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <Typography className={classes.textStyle}>
                        {loggedInMail}
                        </Typography>
                    </Grid>
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <Button variant="contained" color="primary" fullWidth style={{ marginTop: 10, borderRadius: 10 }}>
                            Manage Account
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    )
}
