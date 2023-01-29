import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Form, FormLabel, FormGroup, FormControl, Button, FormSelect } from "react-bootstrap";
import signUpStyle from './css/signup.module.css';
import logo from '../../assets/images/logo.png';
import signUpImage from '../../assets/images/signup-image.png'
import { Formik, useFormik } from "formik";
import { Input, InputGroup, SelectPicker, Checkbox, CheckboxGroup } from "rsuite";
import { ArrowRight, BarChartLineFill } from "react-bootstrap-icons";
import yup from 'yup'




const SignUp = () => {

    const formik = useFormik({
        initialValues: {firstName : '', lastName : '', email : '', userName: '', password : '',
        country : '', phoneNumber : '', accept : false },
        onSubmit: values => console.log(values),
        validate : values => {
            let errors = {...values};
            if (!values.firstName){
                errors.firstName = 'Required'
            }
            if (!values.lastName){
                errors.lastName = 'Required'
            }

            return errors
        }
    });
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)


    return (
        <Container fluid className="bg-primary">
            <Row className={`center ${signUpStyle.container}`}>
                <Col className={`min-vh-100 p-0 ${signUpStyle.left}`}>

                </Col>
                <Col className={`d-flex w-100 min-vh-100 p-3 pt-4 gap-2 flex-column px-4   align-items-center ${signUpStyle.right}`}>
                    <Row className="mt-4 mb-4">
                        <Col>
                            <img src={logo} height={150} />
                        </Col>
                    </Row>
                    <Row className="d-flex justify-content-center mt-4 w-100">
                        <Form onSubmit={formik.handleSubmit} className={`d-flex flex-column text-light justify-content-center align-items-center py-4  border border-1 w-100 border-light ${signUpStyle.row}`} style={{ paddingTop: 30, padding: 50 }}>
                            <h3 style={{ fontWeight: '700' }}>Create Your account</h3>
                            <FormGroup className="d-flex flex-row gap-2 mt-4">
                                <InputGroup className={`d-flex gap-2 align-items-center text-dark px-2 w-50 rounded-1 bg-light ${signUpStyle.textField}`}>
                                    <i className="bi bi-person-fill"></i>
                                    <input placeholder="First Name" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} className="w-100 px-2 py-1 border-0" />
                                </InputGroup>
                                <InputGroup className={`d-flex gap-2 align-items-center text-dark px-2 w-50 rounded-1 bg-light ${signUpStyle.textField}`}>
                                    <i className="bi bi-person-fill"></i>
                                    <input placeholder="Last Name" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} className="w-100 border-0" />
                                </InputGroup>
                            </FormGroup>
                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py ${signUpStyle.textField}`}>
                                <i className="bi bi-envelope-fill"></i>
                                <input placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} type="email" className="w-100 px-2 py-1 border-0 outline-0" />

                            </InputGroup>
                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py ${signUpStyle.textField}`}>
                                <i className="bi bi-person-fill"></i>
                                <input placeholder="Username" name="userName" onChange={formik.handleChange} value={formik.values.userName} className="w-100 px-2 py-1 border-0 outline-0" />

                            </InputGroup>

                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py ${signUpStyle.textField}`}>
                                <i className="bi bi-lock-fill"></i>
                                <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" onChange={formik.handleChange} value={formik.values.password} className="w-100 px-2 py-1 border-0 outline-0" />
                                <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} style={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}></i>
                            </InputGroup>
                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py-1 mb-4 ${signUpStyle.textField}`}>

                                <FormSelect onChange={formik.handleChange} name="country" value={formik.values.country} className="outline-0 border-0 px-2 py-0 w-25 ml-4">
                                    <option value="234">+234</option>
                                    <option value="1">+1</option>
                                    <option value="44">+44</option>
                                </FormSelect>
                                <input onChange={formik.handleChange} placeholder="Phone Number" name="phoneNumber" value={formik.values.phoneNumber} className="w-100 px-2 py-1 border-0 outline-0" />
                            </InputGroup>

                            <CheckboxGroup style={{ color: '#E79C3D', marginLeft: 35 }} className={`w-100  mt-2 d-flex justify-content-center  text-light px-2 ${signUpStyle.checkField}`}>
                                <input className="mb-3" type="checkbox" onChange={formik.handleChange} name="accept" checked={formik.values.accept} style={{ marginRight: 5 }} />
                                I accept the
                                <p className="d-flex pl-0  w-50 p-0 justify-content-center align-items-center" style={{ marginLeft:0, color: '#E79C3D', cursor: 'pointer' }}>terms and conditions</p>
                            </CheckboxGroup>


                            <Button className={`text-dark mt-4 px-4 border-0 outline-0 shadow-none ${signUpStyle.btn}`} type="submit" style={{ backgroundColor: '#E79C3D', fontWeight: '600' }}>Create Account</Button>
                            <Row className="ml-4 d-flex w-100 justify-content-center  mt-4" style={{ paddingLeft: 35, fontSize: 14 }}>
                                Already have an account?
                                <p onClick={() => navigate('/')} className="w-25 p-0" style={{ marginLeft: 4, textDecoration: 'none', color: '#E79C3D', cursor: 'pointer' }}>Login</p>
                            </Row>



                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;