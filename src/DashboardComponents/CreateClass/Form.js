import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'

import { Button, DialogActions, TextField } from "@material-ui/core";
import { v4 as uuidV4 } from "uuid";
import { db } from "../../utils/firebase";

import { useLocalContext } from "../../context/context";

export default function Form() {

  const history = useHistory();

  const [className, setClassName] = useState("");
  const [Section, setSection] = useState("");
  const [Room, setRoom] = useState("");
  const [Subject, setSubject] = useState("");

  const { loggedInMail, setCreateClassDialog } = useLocalContext();

  const addClass = (e) => {
    e.preventDefault();
    const id = uuidV4();

    if (className === "" || Section === "" || Room === "" || Subject === "") {
      alert("please fill up the following fields")
    } else {
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
          history.push(`/${id}`);
        });
    }
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

