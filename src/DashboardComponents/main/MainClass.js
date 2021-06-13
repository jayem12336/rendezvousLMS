import React, { useState } from "react"

import { useLocalContext } from "../../context/context";

import { useHistory } from 'react-router-dom'

import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import "./style.css";

import { db, storage } from "../../utils/firebase";
import firebase from "firebase";

import { MdArrowBack } from 'react-icons/md';
import ClipDrawer from "../Dashboardcomponent/Clipdrawer";
import ClassDrawer from "./ClassDrawer/ClassDrawer";
import Announcement from "./ClassLinks/Announcement/Announcement";

const useStyles = makeStyles((theme) => ({
    closebtn: {
        fontSize: 30,
    },
    iconContainer: {
        cursor: 'pointer',
        position: 'absolute',
        left:2,
        paddingLeft: 10
    },
}))

export default function Main({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const { loggedInMail } = useLocalContext();

    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInput] = useState("");
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = () => {
        const uploadImage = storage.ref(`images/${image.name}`).put(image);

        uploadImage.on("state_changed", () => {
            storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((url) => {
                    db.collection("announcments")
                        .doc("classes")
                        .collection(classData.id)
                        .add({
                            timstamp: firebase.firestore.FieldValue.serverTimestamp(),
                            imageUrl: url,
                            text: inputValue,
                            sender: loggedInMail,
                        });
                });
        });
    };

    console.log(classData);
    return (
        <ClipDrawer>
            <Grid container alignItems="center" alignContent="center" spacing={5}>
                <AppBar position="static" color='secondary'>
                    <Toolbar style={{ justifyContent: 'center' }}>
                        <IconButton className={classes.iconContainer} onClick={() => history.push('/dashboardclass')}>
                            <MdArrowBack
                                className={classes.closebtn}
                            />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {classData.classname}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
            <ClassDrawer classData={classData}>
            </ClassDrawer>
        </ClipDrawer>
    );
};