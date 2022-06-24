import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';

export const Signup = () => {
    return(
        <Formik
            initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
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