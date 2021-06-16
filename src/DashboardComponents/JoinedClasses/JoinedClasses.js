import React, { useState } from "react";

import { IconButton, makeStyles, Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import { BiDotsHorizontalRounded } from "react-icons/bi";

import { db } from '../../utils/firebase'
import "./style.css";

const useStyles = makeStyles((theme) => ({
    burgerBtn: {
        position: 'absolute',
        right: 10,
        top: 5
    }
}))

export default function JoinedClasses({ classData }) {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event) => setAnchorEl(event.currentTarget);

    const handleClose = () => setAnchorEl(null);

    const unenrollBtn = () => {
            db.collection("CreatedClasses").doc(classData.owner).collection("classes").doc(classData.classcode).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
    }

    return (
        <li className="joined__list">
            <div className="joined__wrapper">
                <div className="joined__container">
                    <div className="joined__imgWrapper" />
                    <div className="joined__image" />
                    <div className="joined__content">
                        <Menu
                            id='simple-menu'
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{ marginLeft: 59 }}
                        >
                            <MenuItem onClick={unenrollBtn}>
                                Unenroll
                            </MenuItem>
                        </Menu>
                        <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.burgerBtn}>
                            <BiDotsHorizontalRounded />
                        </IconButton>
                        <Link className="joined__title" to={`/${classData.classcode}`}>
                            <h3>{classData.classname}</h3>
                        </Link>
                        <p className="joined__owner">{classData.section}</p>
                        <p className="joined__owner">{classData.subjectcode}</p>
                        <p className="joined__owner">{classData.room}</p>
                        <p style={{
                            textAlign: 'center',
                            marginTop: 60,
                            color: 'white',
                            fontWeight: 400,
                            fontSize: 18
                        }}>{classData.owner}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}
