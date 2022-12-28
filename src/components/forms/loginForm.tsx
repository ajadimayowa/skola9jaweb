import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import PrimaryButton from "../buttons/PrimaryButton";
import PrimaryInput from "../inputs/primaryInput";

const LoginForm = () => {
    return (
        <Form>
            <FormGroup className="m-3">
                <PrimaryInput placeholder={'Username'} />
            </FormGroup >
            <FormGroup className="m-3 mb-5">
                <PrimaryInput placeholder={'Password'} />
                <p className="mt-2" style={{color:'#FF8B8B'}}>{}</p>
            </FormGroup >
            <FormGroup className="d-flex m-3 justify-content-center">
                <PrimaryButton>Login</PrimaryButton>
            </FormGroup >
        </Form>
    )
}

export default LoginForm;