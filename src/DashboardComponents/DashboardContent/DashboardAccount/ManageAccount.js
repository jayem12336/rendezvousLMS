import React, { useState, useEffect } from "react";

import { Button, Dialog, Grid, Paper, Typography, IconButton, Avatar, CircularProgress, TextField, InputAdornment } from "@material-ui/core";
import { useLocalContext } from "../../../context/context";
import { makeStyles } from '@material-ui/core/styles'
import { Close, CameraAltOutlined } from "@material-ui/icons"
import { DropzoneDialog } from 'material-ui-dropzone';
import Resizer from 'react-image-file-resizer';
import firebase from '../../../utils/firebase';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    margin: {
        marginTop: 15
    },
    dialogContainer: {
        margin: "10px auto",
        borderColor: 'none',
    },
    PaperStyle: {
        height: 560,
        width: 350,
        padding: 20,
    },
    closebtn: {
        fontSize: 50,
    },
    iconContainer: {
        marginTop: 20,
        marginLeft: 20,
        cursor: 'pointer'
    },
    iconStyle: {
        height: 100,
        width: 100,
        marginBottom: 20,
        marginTop: 20

    },
    cameraIcon: {
        position: "absolute",
        marginLeft:50,
        marginTop:60,
        backgroundColor: 'white',
        '&:hover': {
            background: '#4877c2',
        },
    },
    textStyle: {
        textAlign: "center",
        fontSize: 20
    },
    btnContainer: {
        display: "flex",
    },
    btnStyle: {
        marginTop: 15,
        margin: 5
    }

}))
export default function ManageAccount() {

    const classes = useStyles();

    const {
        createManageDialog,
        setCreateaccountDialog,
        setCreateManageDialog
    } = useLocalContext();

    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        showPassword: false,
        isLoading: true,
        user: {},
        userUid: "",
    });
    const handleChange = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const db = firebase.firestore();

                db.collection("users")
                    .doc(user.uid)
                    .onSnapshot((doc) => {
                        setValues({ user: doc.data(), isLoading: false, userUid: user.uid })
                    });
            } else {
                // No user is signed in.
            }
        });
        return () => {
            setValues({}); // This worked for me
        };
    }, [])

    //TODO add circularprogress while uploading 

    const [upload, setUpload] = useState({
        open: false
    })

    //#region for dropzone

    const handleOpenDropzone = () => {
        setUpload({ ...upload, open: true })
    }

    const handleCloseDropzone = () => {
        setUpload({ ...upload, open: false })
    }

    const uploadFileToFirebase = (files) => {
        console.log("upload")
        setUpload({
            open: false,
        })

        try {
            Resizer.imageFileResizer(
                files[0],
                300, //maxWidth
                300, //maxHeight
                "JPEG", //compress type format [JPEG, PNG, WEBP]
                100, //compress quality
                0, //rotation
                (uri) => {

                    //response uri

                    var uploadTask = firebase.storage().ref(`user_profile/${values.userUid}`)
                        .put(uri);



                    uploadTask.on('state_changed',
                        (snapshot) => {
                            // Observe state change events such as progress, pause, and resume
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                        },
                        (error) => {
                            // Handle unsuccessful uploads
                        },
                        () => {
                            // Handle successful uploads on complete
                            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {

                                const db = firebase.firestore();
                                db.collection("users").doc(values.userUid).set({
                                    photo_url: downloadURL
                                },
                                    { merge: true }
                                );

                                setValues({
                                    ...values,
                                    user: { ...values.user, photo_url: downloadURL },
                                    error: "",
                                });

                            });
                        }
                    );



                },
                "file", //ouput type [base64, file, blob]
                200, //minWidth
                200 //minHeight
            );
        } catch (err) {
            console.log(err);
        }
    }

    //#endregion

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
        <div>
            <Dialog
                fullScreen
                open={createManageDialog}
                onClose={() => setCreateManageDialog(false)}
            >
                <Grid container justify='center' alignItems='center' alignContent='center'>

                    <Grid container className={classes.closebtnContainer}>
                        <IconButton className={classes.iconContainer}>
                            <Close
                                className={classes.closebtn}
                                onClick={() => {
                                    setCreateaccountDialog(true)
                                    setCreateManageDialog(false)  
                                }}
                            />
                        </IconButton>
                        <h2 style={{ color: 'black', marginBottom: 20, marginTop: 50, fontSize: 40, marginLeft: 20 }}>
                            Manage Account
                                </h2>
                    </Grid>
                    <Grid container className={classes.dialogContainer} justify='center' alignItems='center' alignContent='center'>

                        <Paper elevation={10} className={classes.PaperStyle}>
                            <Grid container justify='center' alignItems='center' alignContent='center'>
                                {values.user && values.user.photo_url ? (
                                    <Avatar
                                        alt="photo_url"
                                        src={values.user.photo_url}
                                        className={classes.iconStyle}
                                    />
                                ) : (
                                    <Avatar className={classes.iconStyle}></Avatar>
                                )}
                                <IconButton
                                    className={classes.cameraIcon}
                                    onClick={handleOpenDropzone}
                                >
                                    <CameraAltOutlined >

                                    </CameraAltOutlined>
                                </IconButton>
                                <DropzoneDialog
                                    open={upload.open}
                                    onSave={uploadFileToFirebase}
                                    acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
                                    showPreviews={true}
                                    maxFileSize={25000000}
                                    filesLimit={1}
                                    onClose={handleCloseDropzone}
                                />
                            </Grid>
                            <Grid item>
                                <Typography className={classes.textStyle}>
                                    {values.user && values.user.first_name + " " + values.user.last_name}
                                </Typography>
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    label="EMAIL"
                                    placeholder="Email"
                                    variant="outlined"
                                    size="medium"
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
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    label="Phone No#."
                                    placeholder="Phone Number"
                                    variant="outlined"
                                    size="medium"
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
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    label="PASSWORD"
                                    placeholder="Password"
                                    variant="outlined"
                                    onChange={handleChange("password")}
                                    value={values.password}
                                    type={values.showPassword ? 'text' : 'password'}
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
                            </Grid>
                            <Grid>
                                <TextField
                                    className={classes.margin}
                                    label="Confirm Password"
                                    placeholder="Confirm Password"
                                    variant="outlined"
                                    onChange={handleChange("confirmpassword")}
                                    value={values.confirmpassword}
                                    type={values.showPassword ? 'text' : 'password'}
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
                            </Grid>
                            <Grid item className={classes.btnContainer}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.btnStyle}
                                    size="large"
                                    fullWidth
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.btnStyle}
                                    size="large"
                                    fullWidth
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Dialog>
        </div>
    );
};
