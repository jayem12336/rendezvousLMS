import React, { useState, useEffect } from 'react'

import { Avatar } from '@material-ui/core'
import { db } from '../../../../utils/firebase';
import firebase from 'firebase';

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { useLocalContext } from '../../../../context/context';
import AnnouncementList from './AnnouncementList';
import SampleDrawer from '../../ClassDrawer/ClassDrawer';

const useStyles = makeStyles((theme) => ({
    closebtn: {
        fontSize: 30,
    },
    iconContainer: {
        cursor: 'pointer',
        position: 'absolute',
        left: 2,
        paddingLeft: 10
    },
    gridcontainer: {
        display: "flex",
        padding: 20,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        marginTop: 5
    },
    main: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
    },
}))

export default function Announcement({ classData }) {

    const classes = useStyles();

    const [showInput, setShowInput] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const { loggedInMail } = useLocalContext();

    const [values, setValues] = useState({
        user: {},
    });

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const db = firebase.firestore();

                db.collection("users")
                    .doc(user.uid)
                    .onSnapshot((doc) => {
                        setValues({ user: doc.data() })
                    });
            } else {
                // No user is signed in.
            }
        });
        return () => {
            setValues({}); // This worked for me
        };
    }, [])

    const handleUpload = () => {

        if (!inputValue) {
            alert("Please fill up the fields");
        } else {
            db.collection("announcement")
                .doc("classes")
                .collection(classData.classcode)
                .add({
                    created_at: new Date(),
                    text: inputValue,
                    sender: loggedInMail,
                    photourl: values.user.photo_url,
                    firstname: values.user.first_name,
                    lastname: values.user.last_name,
                }).then((docRef) => {
                    console.log("Document written with ID: ", docRef.id)
                })
            setInputValue("");
        }
    }

    return (
        <SampleDrawer classData={classData}>
            <Grid container justify="center" alignItems="center" style={{ marginTop: 20 }}>
                <Grid container justify="flex-start" alignItems="center">
                    <Grid container className={classes.gridcontainer} spacing={3}>
                        <Grid item sm={10}>
                            {showInput ? (
                                <Grid container className={classes.main_form} spacing={3}>
                                    <Grid item sm={1}>
                                        <Avatar src={values.user && values.user.photo_url} />
                                    </Grid>
                                    <Grid item sm={11}>
                                        <TextField
                                            variant="filled"
                                            multiline
                                            label="Announce Something to the class"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                </Grid>) : (
                                <Grid container className={classes.main}
                                    onClick={() => setShowInput(true)}
                                >
                                    <Avatar src={values.user && values.user.photo_url} />
                                    <Typography style={{ paddingLeft: 20 }}>Announce Something To Class</Typography>

                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: 40, borderRadius: 30 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleUpload}
                        >Announce</Button>
                    </Grid>
                </Grid>
            </Grid>
            <AnnouncementList classData={classData} />
        </SampleDrawer>
    )
}
