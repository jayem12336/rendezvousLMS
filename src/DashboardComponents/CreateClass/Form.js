import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Redirect, Switch, useHistory } from 'react-router-dom'

import { Button, DialogActions, TextField } from "@material-ui/core";
import { v4 as uuidV4 } from "uuid";
import { db } from "../../utils/firebase";

import { useLocalContext } from "../../context/context";
import ClipDrawer from '../Dashboardcomponent/Clipdrawer';
import Main from '../main/Main';

export default function Form() {

  const history = useHistory();

  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

  const { loggedInMail, setCreateClassDialog } = useLocalContext();

  const [createdClasses, setCreatedClasses] = useState([]);

  useEffect(() => {
    if (loggedInMail) {
      let unsubscribe = db
        .collection('CreatedClasses').doc(loggedInMail)
        .collection('classes')
        .onSnapshot((snapshot) => {
          setCreatedClasses(snapshot.docs.map((doc) => doc.data()))
        })

      return () => unsubscribe();
    }
  }, [loggedInMail])


  const addClass = (e) => {
    e.preventDefault();
    const id = uuidV4();

    db.collection("CreatedClasses")
      .doc(loggedInMail)
      .collection("classes")
      .doc(id)
      .set({
        owner: loggedInMail,
        className: className,
        section: Section,
        room: Room,
        id: id,
      })
      .then(() => {
        setCreateClassDialog(false);
        {createdClasses.map((item, index) => (
          <Route key={index} exact path={`/${item.id}`}>
            <ClipDrawer>
              <Main classData={item} />
            </ClipDrawer>
          </Route>
        ))}
      });
  };

  return (
    <div className="form">
      <p className="class__title">Create Class</p>

      <div className="form__inputs">
        <TextField
          id="filled-basic"
          label="Class Name (required)"
          className="form__input"
          variant="filled"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Section"
          className="form__input"
          variant="filled"
          value={Section}
          onChange={(e) => setSection(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Subject Code"
          className="form__input"
          variant="filled"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Room"
          className="form__input"
          variant="filled"
          value={Room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </div>
      <DialogActions>
        <Button onClick={addClass} color="secondary">
          Create
        </Button>
      </DialogActions>
    </div>
  );
};

