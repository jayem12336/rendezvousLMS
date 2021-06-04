import React, { useState } from "react"

import { useLocalContext } from "../../context/context";

import { useHistory } from 'react-router-dom'

import { Avatar, Button, IconButton, TextField, makeStyles } from "@material-ui/core";
import "./style.css";

import { db, storage } from "../../utils/firebase";
import firebase from "firebase";

import { MdArrowBack } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    closebtn: {
        fontSize: 40,
    },
    iconContainer: {
        cursor: 'pointer'
    }
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

    return (
        <div className="main">
            <IconButton className={classes.iconContainer} onClick={() => history.push('/dashboardclass')}>
                <MdArrowBack
                    className={classes.closebtn}    
                />
            </IconButton>
            <div className="main__wrapper">
                <div className="main__content">
                    <div className="main__wrapper1">
                        <div className="main__bgImage">
                            <div className="main__emptyStyles" />
                        </div>
                        <div className="main__text">
                            <h1 className="main__heading main__overflow">
                                {classData.className}
                            </h1>
                            <div className="main__section main__overflow">
                                {classData.section}
                            </div>
                            <div className="main__wrapper2">
                                <em className="main__code">Class Code :</em>
                                <div className="main__id">{classData.id}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main__announce">
                    <div className="main__status">
                        <p>Upcoming</p>
                        <p className="main__subText">No work due</p>
                    </div>
                    <div className="main__announcements">
                        <div className="main__announcementsWrapper">
                            <div className="main__ancContent">
                                {showInput ? (
                                    <div className="main__form">
                                        <TextField
                                            id="filled-multiline-flexible"
                                            multiline
                                            label="Announce Something to class"
                                            variant="filled"
                                            value={inputValue}
                                            onChange={(e) => setInput(e.target.value)}
                                        />
                                        <div className="main__buttons">
                                            <input
                                                onChange={handleChange}
                                                variant="outlined"
                                                color="primary"
                                                type="file"
                                            />
                                            <div>
                                                <Button onClick={() => setShowInput(false)}>
                                                    Cancel
                                                </Button>

                                                <Button
                                                    onClick={handleUpload}
                                                    color="primary"
                                                    variant="contained"
                                                >
                                                    Post
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="main__wrapper100"
                                        onClick={() => setShowInput(true)}
                                    >
                                        <Avatar />
                                        <div>Announce Something to class</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};