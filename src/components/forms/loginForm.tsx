import React from "react";
import { Alert, Form, FormGroup } from "react-bootstrap";
import PrimaryButton from "../buttons/PrimaryButton";
import PrimaryInput from "../inputs/primaryInput";
import { useFormik } from "formik";
import * as yup from 'yup';

const LoginForm = () => {
    

    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: yup.object({}),
        onSubmit: (value) => handleLogin(value)
    })

    const user = { validName: 'ade', validPassword: 'tola' }

    const handleLogin = (val: any) => {
        if (user.validName === val.username && user.validPassword === val.password) {
            console.log('Log In Succesful')
        } 
        else alert('Not a registered User')

    }

    return (
        <Form>

            <FormGroup className="d-flex m-3 justify-content-center">
                <PrimaryInput handleChange={formik.handleChange} name={'username'} inputValue={formik.values.username} placeholder={'Username'} />
            </FormGroup >
            <FormGroup className="d-flex m-3 justify-content-center">
                <PrimaryInput handleChange={formik.handleChange} name={'password'} placeholder={'Password'} />
                <p className="mt-2" style={{ color: '#FF8B8B' }}>{ }</p>
            </FormGroup >
            <FormGroup className="d-flex m-3 justify-content-center">
                <PrimaryButton onClick={formik.handleSubmit}>Login</PrimaryButton>
            </FormGroup >

        </Form>
    )
}

export default LoginForm;