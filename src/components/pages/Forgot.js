import React from 'react'

import {
    Grid,
    Paper,
    Button,
    TextField,
    makeStyles,
    Avatar,
    Typography
} from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';



import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik'

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: '20px 15px 40px 15px',
        width: 250

    },
    btnStyle: {
        marginTop: 30
    },
    textmargin: {
        marginBottom: 10
    }
}))

export default function Forgot() {

    const classes = useStyles();

    const initialValues = {
        email: ''
    }
    const validationSchema = Yup.object().shape({

        email: Yup.string().email('Enter Valid Email').required("Required"),

    })
    const onSubmit = (values, props) => {
        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }

    return (
        <Grid>
            <Paper elevation={0} className={classes.paperStyle}>
                <Grid align='center'>

                    <Avatar></Avatar>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} name='email'
                                fullWidth
                                helperText={<ErrorMessage name='email' />}
                                required
                                error={props.errors.email && props.touched.email}
                                className={classes.textmargin}
                                id="input-with-icon-textfield"
                                label="Email"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            
                            <Button
                                type='submit'
                                className={classes.btnStyle}
                                variant='contained'
                                color='primary'
                                fullWidth
                            > Login </Button>
                            <Typography style={{color:"black", textAlign:"center", marginTop:"20px"}}>Forgot Password</Typography>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid >
    )
}
