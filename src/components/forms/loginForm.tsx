import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Input, InputGroup, SelectPicker } from "rsuite";
import PrimaryButton from "../buttons/PrimaryButton";
import PrimaryInput from "../inputs/primaryInput";
import { useFormik } from "formik";
import * as yup from 'yup';
import { useLocation, useNavigate } from "react-router-dom";
import loginS from './login.module.css';



const LoginForm = () => {
    const initialValues = { username: '', password: '', accept: false } ;
    
    const [showPassword, setShowPassword] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    const [allUsers, setAllUsers]: any = useState([])

    const formik = useFormik({
        initialValues : initialValues,
        onSubmit: values => handleLogin(values),
        validate: values => handleValidation(values)
    })


    const handleLogin = (val: any) => {
        const updatedUsers = allUsers.push(val);
        setAllUsers((currentUser: any) => [...currentUser, updatedUsers]);
        console.log(val);

    }

    const handleValidation = (values:any)=>{
        let errors = {...values}
        if (!values.username){
            errors.username = 'Required Field'
        }
        if (!values.password){
            errors.username= 'Required Field'
        }
        if (!values.accept){
            errors.accept = "Accept Terms and condition";
        }

        return errors;
    }

    return (
        <Row className="w-100 d-flex justify-content-center">
            <Form onSubmit={formik.handleSubmit}>
                <Col className="d-flex py-4 flex-column">
                    <InputGroup className={`w-100 mt-3 d-flex rounded-1 bg-light text-dark align-items-center px-2 ${loginS.textField}`}>
                        <i className="bi bi-person-fill"></i>
                        <input onChange={formik.handleChange} placeholder="Username" name="username" value={formik.values.username} className="px-2 py-1 border-0 w-75  outline-0" />
                    </InputGroup>
                    <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 ${loginS.textField}`}>
                        <i className="bi bi-lock-fill"></i>
                        <input onChange={formik.handleChange} value={formik.values.password} name="password" type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-75 px-2 py-1 border-0 outline-0" />
                        <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} style={{ cursor: 'pointer', marginLeft: 30 }} onClick={() => setShowPassword(!showPassword)}></i>
                    </InputGroup>
                    <Col xs={6}>
                        <InputGroup className={`mt-4 d-flex rounded-1 text-light align-items-center px-2`}>

                            <input type="checkbox" onChange={formik.handleChange} checked={formik.values.accept} name="accept" className="border-0  outline-0" />
                            <i className={"b bi-eye-fil ml-3"}>Remember me</i>
                        </InputGroup>
                    </Col>
                    <Button type="submit" className="text-dark mt-4 px-4 border-0"  style={{ backgroundColor: '#E79C3D', fontWeight: '600' }}>Login</Button>
                </Col>
            </Form>
        </Row>
    )
}

export default LoginForm;