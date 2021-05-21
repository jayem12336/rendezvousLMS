import React from 'react'

import {
    Grid,
    Paper,
    Button,
    Typography,
    TextField,
    makeStyles
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

export default function Register() {

    const classes = useStyles();

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({

        name: Yup.string().min(3,"It's too short").required("Required"),
        email: Yup.string().email('Enter Valid Email').required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
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
                   
                    <Typography variant='caption'> Fill the form to create an account </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            {/* <TextField 
                            label='Name' 
                            name= 'name'
                            values={props.values.name}
                            onChange={props.handleChange}
                            fullWidth 
                            /> */}
                            <Field as={TextField} name='name'
                                label='Name'
                                fullWidth
                                helperText={<ErrorMessage name='name' />}
                                required
                                error={props.errors.name&&props.touched.name}
                            />
                            {/* <TextField label='Email'
                             type='email' 
                             name='email'
                              fullWidth 
                              {...props.getFieldProps('email')} 
                              /> */}
                            <Field as={TextField} name='email'
                                label='Email'
                                fullWidth
                                helperText={<ErrorMessage name='email' />}
                                required
                                error={props.errors.email&&props.touched.email}
                            />
                            <Field as={TextField} name="phoneNumber"
                                label='Phone Number'
                                fullWidth
                                helperText={<ErrorMessage name='phoneNumber' />}
                                required
                                error={props.errors.phoneNumber&&props.touched.phoneNumber}
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
                            > Register </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
