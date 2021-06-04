import React, { useState } from "react";

import { useHistory } from 'react-router-dom'

import {Button, Dialog, Grid, Paper, TextField } from "@material-ui/core";
import { useLocalContext } from "../../context/context";
import { Close } from "@material-ui/icons";
import "./style.css";
import { db } from '../../utils/firebase';
import { makeStyles } from '@material-ui/core/styles'

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
  PaperStyle: {
    height: 250,
    width: 550,
    padding: 20
  },
  dialogContainer: {
    padding: 20,
    margin: "40px auto",
    borderColor: 'none',
  },
}))
export default function JoinClass() {

  const history = useHistory();

  const classes = useStyles();

  const {
    joinClassDialog,
    setJoinClassDialog,
    loggedInUser,
  } = useLocalContext();

  const [classCode, setClassCode] = useState("");
  const [email, setemail] = useState("");
  const [error, setError] = useState();
  const [joinedData, setJoinedData] = useState();
  const [classExists, setClassExists] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("CreatedClasses")
      .doc(email)
      .collection("classes")
      .doc(classCode)
      .get()
      .then((doc) => {
        if (doc.exists && doc.owner !== loggedInUser.email) {
          setClassExists(true);
          setJoinedData(doc.data());
          setError(false);
        } else {
          setError(true);
          setClassExists(false);
          return;
        }
      });

    if (classExists === true) {
      db.collection("JoinedClasses")
        .doc(loggedInUser.email)
        .collection("classes")
        .doc(classCode)
        .set({
          joinedData,
        })
        .then(() => {
          setJoinClassDialog(false);
          history.push(`/${classCode}`);
        });
    }
  };

  return (
    <div>
      <Dialog
        fullScreen
        open={joinClassDialog}
        onClose={() => setJoinClassDialog(false)}
      >
        <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wraper2"
              onClick={() => setJoinClassDialog(false)}
            >
              <Close className="joinClass__svg" />
              <div className="joinClass__topHead">Join Class</div>
            </div>
          </div>
          <Grid container justify='center' alignItems='center' alignContent='center'>
            <Grid container justify='center' alignItems='center' alignContent='center'>
              <Grid container className={classes.dialogContainer} justify='center' alignItems='center' alignContent='center'>
                  <Paper elevation={10} className={classes.PaperStyle}>
                    <Grid item>
                      <TextField
                        className={classes.margin}
                        label="Class Code"
                        variant="outlined"
                        value={classCode}
                        onChange={(e) => setClassCode(e.target.value)}
                        error={error}
                        helperText={error && "No class was found"}
                        autoFocus={true}
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        className={classes.margin}
                        label="Owner's email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        autoFocus={true}
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                        size="large"
                        fullWidth
                        onClick={handleSubmit}
                      >
                        Join
                        </Button>
                    </Grid>
                  </Paper>
              </Grid>
            </Grid>
          </Grid>
        </div>

      </Dialog>
    </div>
  );
};
