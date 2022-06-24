import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        lastName: Yup.string()
        .min(4, 'Must be 4 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 charaters')
        .max(20, 'Password must be 20 charaters or less')
        .required('Password is required'),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    })

    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => console.log(values)}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
                    {console.log(formik.values)}
                    <Form>
                        <TextField label="First name" name="firstName" type="text"/>
                        <TextField label="Last name" name="lastName" type="text" />
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="password" />
                        <TextField label="Confirm password" name="confirmPassword" type="password" />
                        <button className="btn btn-dark mt-3" type="submit">Register</button>
                        <button className="btn btn-danger mt-3 ml-4" type="reset">Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    );
};