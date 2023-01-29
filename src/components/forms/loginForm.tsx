import React, { useState } from "react";
import { Alert, Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Input, InputGroup, SelectPicker } from "rsuite";
import PrimaryButton from "../buttons/PrimaryButton";
import PrimaryInput from "../inputs/primaryInput";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import loginS from './login.module.css';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: { username: '', password: '' },
        validationSchema: yup.object({}),
        onSubmit: (value) => handleLogin(value)
    })

    const handleLogin = (val: any) => {

        console.log(val)

    }

    return (
        <Row className="w-100 d-flex justify-content-center">
            <Form>
                <Col className="d-flex py-4 flex-column">
                    <InputGroup className={`w-100 mt-3 d-flex rounded-1 bg-light text-dark align-items-center px-2 ${loginS.textField }`}>
                        <i className="bi bi-person-fill"></i>
                        <Input onChange={()=>formik.handleChange} placeholder="Username" name="username" className="p-2 border-0 w-75  outline-0" />
                    </InputGroup>
                    <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 ${loginS.textField }`}>
                        <i className="bi bi-lock-fill"></i>
                        <Input onChange={()=>formik.handleChange} name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-75 p-2 border-0 outline-0" />
                        <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} style={{ cursor: 'pointer', marginLeft: 30 }} onClick={() => setShowPassword(!showPassword)}></i>
                    </InputGroup>
                    <Button className="text-dark mt-4 px-4 border-0" type="submit" onClick={(e) => {formik.handleSubmit(); e.preventDefault()}} style={{ backgroundColor: '#E79C3D', fontWeight: '600' }}>Login</Button>
                </Col>
            </Form>
        </Row>
    )
}

export default LoginForm;