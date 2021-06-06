import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Dialog,
    Grid,
    Button,
    CircularProgress,
    Avatar,
    IconButton
} from '@material-ui/core';
import { CameraAltOutlined, Close } from "@material-ui/icons";
import { useLocalContext } from '../../../context/context';
import { DropzoneDialog } from 'material-ui-dropzone';
import Resizer from 'react-image-file-resizer';
import firebase from '../../../utils/firebase';

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
        right: 80,
        top: 130,
        backgroundColor: 'white',
        '&:hover': {
            background: '#4877c2',
        }
    }
}))

export default function AccountContent() {

    const classes = useStyles();

    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
        isLoading: true,
        user: {},
        userUid: "",
    });

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




    const {
        createLoginDialog,
        setCreateLoginDialog

    } = useLocalContext();


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
                        {values.user && values.user.photo_url ? (
                            <Avatar
                                alt="photo_url"
                                src={values.user.photo_url}
                                className={classes.iconStyle}
                            />
                        ) : (
                            <Avatar className={classes.iconStyle}></Avatar>
                        )}
                        {/* <Avatar  >
                        </Avatar> */}
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
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <Typography className={classes.textStyle}>
                            {values.user && values.user.first_name + " " + values.user.last_name}
                        </Typography>
                    </Grid>
                    <Grid container justify='center' alignItems='center' alignContent='center'>
                        <Typography className={classes.textStyle}>
                            {values.user && values.user.email}
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
