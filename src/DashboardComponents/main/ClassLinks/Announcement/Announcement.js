import React, { useState } from 'react'

import ClipDrawer from '../../../Dashboardcomponent/Clipdrawer'
import ClassDrawer from '../../../main/ClassDrawer/ClassDrawer';
import { Avatar } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { db } from '../../../../utils/firebase';
import firebase from 'firebase';
import { IconButton, makeStyles, AppBar, Toolbar, Typography, Grid, Button, TextField } from "@material-ui/core";
import { MdArrowBack } from 'react-icons/md';
import { useLocalContext } from '../../../../context/context';
import AnnouncementList from './AnnouncementList';

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
        border: "1px solid grey",
        marginTop: 5
    },
    main: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center",
    },
}))

export default function Announcement({ classData }) {

    const history = useHistory();

    const classes = useStyles();

    const [showInput, setShowInput] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const { loggedInMail } = useLocalContext();

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
                    photourl: classData.profilephoto,
                    firstname: classData.firstname,
                    lastname: classData.lastname,
                }).then((docRef) => {
                    console.log("Document written with ID: ", docRef.id)
                })
            setInputValue("");
        }
    }

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
            <ClassDrawer classData={classData.classcode}>
                <Grid container justify="center" alignItems="center" style={{ marginTop: 20 }}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid>
                            <Typography variant="subtitle1">
                                06-02-2021 05:20PM
                            </Typography>
                        </Grid>
                        <Grid container className={classes.gridcontainer} spacing={3}>
                            <Grid item sm={10}>
                                {showInput ? (
                                    <Grid container className={classes.main_form} spacing={3}>
                                        <Grid item sm={1}>
                                            <Avatar src={classData.profilephoto} />
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
                                        <Avatar src={classData.profilephoto} />
                                        <Typography style={{ paddingLeft: 20 }}>Announce Something To Class</Typography>

                                    </Grid>
                                )}
                            </Grid>
                            <Grid item sm={2}>
                                <Grid container justify="flex-end">
                                    <Button variant="contained" color="primary">
                                        Remove
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify="center" style={{ marginTop: 20, borderRadius: 30 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleUpload}
                            >Announce</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <AnnouncementList classData={classData} />
            </ClassDrawer>
        </ClipDrawer>
    )
}
