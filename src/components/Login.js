import React from 'react'

import {
    Grid,
    Paper,
    Button,
    TextField,
    makeStyles,
    Avatar
} from '@material-ui/core'
import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik'

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: '0px 15px 40px 15px',
        width: 250
    },
    btnStyle: {
        marginTop: 10
    }
}))

export default function Login() {

    const classes = useStyles();

    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({

        email: Yup.string().email('Enter Valid Email').required("Required"),
        password: Yup.string().min(8,"Minimum character should be 8").required("Required"),

    })
    const onSubmit = (values, props) => {
        alert(JSON.stringify(values),null,2)
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
                                label='Email'
                                fullWidth
                                helperText={<ErrorMessage name='email' />}
                                required
                                error={props.errors.email&&props.touched.email}
                            />

                            <Field as={TextField}
                                name='password'
                                label='Password'
                                type='password'
                                fullWidth
                                helperText={<ErrorMessage name='password' />}
                                required
                                error={props.errors.password&&props.touched.password}
                            />
                            <Button
                                type='submit'
                                className={classes.btnStyle}
                                variant='contained'
                                color='primary'
                            > Login </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
