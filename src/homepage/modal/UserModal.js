import React from 'react'
import { Button, Grid, makeStyles, Paper, TextField } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: "100vh",
        width: "100vw"
    },
    content: {
        padding: theme.spacing(5),
        width:500,
        borderRadius:"100px",
        "@media (max-width: 600px)": {
            width: 320
        },
    }
}))


export default function UserModal({ setOpen }) {

    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Paper style={{borderRadius:20}}>
                    <Grid container direction="column" spacing={2} className={classes.content}>
                        <Grid item container direction="column" spacing={1}>
                            <Grid item>
                            <TextField
                            variant="outlined"
                            label="Type"
                            fullWidth
                            />
                            </Grid>
                            <Grid item>
                            <TextField
                            variant="outlined"
                            label="name"
                            fullWidth
                            />
                            </Grid>
                            <Grid item>
                            <TextField
                            variant="outlined"
                            label="Breed"
                            fullWidth
                            />
                            </Grid>

                        </Grid>
                        <Grid item container spacing={2}justify="flex-end">
                        <Grid  item>
                            <Button
                                variant="contained"
                                color="secondary"
                            >
                                Save
                        </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={handleClose}
                            >
                                Discard
                        </Button>
                        </Grid>
                        </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
