import React, { useState, useEffect } from 'react'
import { db } from '../../../../utils/firebase'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import moment from 'moment'

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
    },
    main: {
        display: "flex",
        cursor: "pointer",
        alignItems: "center"
    },

}))

export default function AnnouncementList({ classData }) {

    const classes = useStyles();

    const [announcement, setAnnouncement] = useState([]);

    useEffect(() => {
        if (classData) {
            let unsubscribe =
                db.collection('announcement')
                    .doc('classes')
                    .collection(classData.classcode)
                    .orderBy('created_at', 'desc')
                    .onSnapshot((snap) => {
                        setAnnouncement(snap.docs.map((doc) => doc.data()));
                    })
            return () => unsubscribe();
        }

    }, [classData])

    const deleteAnnouncement = (id) => {
        db.collection("announcement")
            .doc("classes")
            .collection(classData.classcode)
            .doc()
            .delete()
            .then(() => {
                alert("error");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            {announcement.map((item) => (
                <Grid container justify="center" alignItems="center" style={{ marginTop: 20 }}>
                    <Grid container justify="flex-start" alignItems="center">
                        <Grid>
                            <Typography variant="subtitle1">
                                {moment(item.created_at.toDate().toString()).calendar()}
                            </Typography>
                        </Grid>
                        <Grid container className={classes.gridcontainer} justify='space-between'>
                            <Grid item >
                                <Grid container justify="flex-start">
                                    <Avatar src={item.photourl} />
                                    <Typography variant="subtitle1" style={{ paddingLeft: 20 }}>
                                        {item.firstname + " " + item.lastname}
                                    </Typography>
                                </Grid>
                                <Grid container style={{ textAlign: "center", fontSize: 20, marginTop: 20 }}>
                                    {item.text}
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={deleteAnnouncement}
                                >
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </div>
    )
}
