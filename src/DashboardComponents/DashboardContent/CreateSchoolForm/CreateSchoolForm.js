import React from "react";

//Material ui Components
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

//Pop up dialog
import { useLocalContext } from "../../../context/context";

import { Close } from "@material-ui/icons";

import { deepOrange } from '@material-ui/core/colors';

import { ImProfile, ImAddressBook } from 'react-icons/im';
import { MdAssignmentInd } from 'react-icons/md';
import { RiContactsBook2Line } from 'react-icons/ri';

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    cursor: 'pointer',
    position: 'absolute',
    right: 15,
    top: 3
  },
  closebtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    cursor: "pointer",
  },
  closebtnContainer: {
    cursor: 'pointer',
  },
  dialogContainer: {
    padding: 20,
    margin: "40px auto",
    borderColor: 'none',
    width: 500,
  },
  dialog: {
    borderRadius: '40px',
    height: '700px',
  },
  textSize: {
    height: 35,
    fontSize: 15
  },
  margin: {
    marginBottom: 0
  },
  square: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    height: 100,
    width: 150
  },
}))

export default function CreateSchoolForm() {


  const classes = useStyles();

  const { createSchoolDialog, setCreateSchoolDialog } = useLocalContext();

  return (
    <div>
      <Dialog
        onClose={() => setCreateSchoolDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createSchoolDialog}
        className={classes.dialog}
        maxWidth={false}
        PaperProps={{
          style: {
            height: 550,
            width: 600,
            padding:10
          }
        }}
      >
        <Grid container justify='center' alignItems='center' alignContent='center'>
          <Grid className={classes.dialogContainer}>
            <Grid container className={classes.closebtnContainer}>
              <Close
                className={classes.closebtn}
                onClick={() => setCreateSchoolDialog(false)}
              />
              <Typography style={{ position: 'absolute', left: 20, top: 20 }}>CREATE SCHOOL</Typography>
              <Typography
                variant='caption'
              >
                *Important make sure the creator of the school must be named in the proof of payment.
              </Typography>
            </Grid>
            <form>
              <TextField
                className={classes.margin}
                label="SCHOOL NAME"
                placeholder="School name"
                variant="outlined"
                size="medium"
                margin="normal"
                autoFocus={true}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ImProfile style={{ color: 'blue' }} />
                    </InputAdornment>
                  ),
                  className: classes.textSize
                }}
                InputLabelProps={{
                  className: classes.labelStyle
                }}
              />
              <TextField
                className={classes.margin}
                label="SCHOOL ADDRESS"
                placeholder="School Address"
                variant="outlined"
                size="medium"
                margin="normal"
                autoFocus={true}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ImAddressBook style={{ color: 'blue' }} />
                    </InputAdornment>
                  ),
                  className: classes.textSize
                }}
                InputLabelProps={{
                  className: classes.labelStyle
                }}
              />
              <TextField
                className={classes.margin}
                label="SCHOOL ID"
                placeholder="School ID"
                variant="outlined"
                size="medium"
                margin="normal"
                autoFocus={true}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdAssignmentInd style={{ color: 'blue' }} />
                    </InputAdornment>
                  ),
                  className: classes.textSize
                }}
                InputLabelProps={{
                  className: classes.labelStyle
                }}
              />
              <TextField
                className={classes.margin}
                label="PHONE NUMBER"
                placeholder="Enter your phone number"
                variant="outlined"
                size="medium"
                margin="normal"
                autoFocus={true}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RiContactsBook2Line style={{ color: 'blue' }} />
                    </InputAdornment>
                  ),
                  className: classes.textSize
                }}
                InputLabelProps={{
                  className: classes.labelStyle
                }}
              />
            </form>
          </Grid>
          <Grid container justify='center' alignItems='center' alignContent='center' style={{ marginTop: -18 }}>
            <Grid item sm={6}>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Typography variant="caption">Proof of transaction</Typography>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center' style={{ padding: 10 }}>
                <Avatar variant="square" className={classes.square}>
                  N
                </Avatar>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Button
                  variant="contained"
                  component="label"
                  color="secondary"
                >
                  Upload
                  <input
                    type="file"
                    hidden
                  />
                </Button>
              </Grid>
            </Grid>
            <Grid item sm={6}>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Typography variant="h6">Price</Typography>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Typography variant="subtitle1">Php 499/year</Typography>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Typography variant="subtitle1">Mode of Payment</Typography>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Typography variant="subtitle2">GCASH - (+63) 923-233-4545</Typography>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center'>
                <Typography variant="subtitle2">GCASH - (+63) 923-233-4545</Typography>
              </Grid>
              <Grid container justify='center' alignItems='center' alignContent='center' style={{marginTop:12}}>
                <Button variant="contained" color="secondary"> REQUEST </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </div>
  );
};