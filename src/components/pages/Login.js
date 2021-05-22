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
import Forgotdialog from '../dialog/Forgotdialog'
import Forgot from '../pages/Forgot'

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

export default function Login() {

    const classes = useStyles();

    const initialValues = {
        email: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({

        email: Yup.string().email('Enter Valid Email').required("Required"),
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
                            

                            <Field as={TextField}
                                name='password'
                                label='Password'
                                type='password'
                                fullWidth
                                helperText={<ErrorMessage name='password' />}
                                required
                                error={props.errors.password && props.touched.password}
                                className={classes.textmargin}
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
                            > Login </Button>
                            <Typography style={{color:"black", textAlign:"center", marginTop:"20px"}}>Forgot Password</Typography>
                            
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid >
    )
}
