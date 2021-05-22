import React from 'react'
import clsx from 'clsx';
import {
    Grid,
    Paper,
    Button,
    Typography,
    TextField,
    makeStyles
} from '@material-ui/core'

import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import LockIcon from '@material-ui/icons/Lock';

import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik'

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: '0px 15px 40px 15px',
        width: 250
    },
    btnStyle: {
        marginTop: 40
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

        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email('Enter Valid Email').required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
        password: Yup.string().min(8, "Minimum character should be 8").required("Required"),

    })
    const onSubmit = (values, props) => {
        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
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
                                error={props.errors.name && props.touched.name}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <PersonIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            {/* <TextField label='Email'
                             type='email' 
                             name='email'
                              fullWidth 
                              {...props.getFieldProps('email')} 
                              /> */}
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
                            <Field as={TextField} name="phoneNumber"
                                label='Phone Number'
                                fullWidth
                                helperText={<ErrorMessage name='phoneNumber' />}
                                required
                                error={props.errors.phoneNumber && props.touched.phoneNumber}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CallIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Field as={TextField}
                                name='password'
                                label='Password'
                                type='password'
                                fullWidth
                                helperText={<ErrorMessage name='password' />}
                                required
                                error={props.errors.password && props.touched.password}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />


                            <FormControl className={clsx(classes.margin, classes.textField)}>
                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LockIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }

                                />
                            </FormControl>
                            <Button
                                type='submit'
                                className={classes.btnStyle}
                                variant='contained'
                                color='primary'
                                fullWidth
                            > Register </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
