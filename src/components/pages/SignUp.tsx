import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Form, FormLabel, FormGroup, FormControl, Button, FormSelect } from "react-bootstrap";
import signUpStyle from './css/signup.module.css';
import logo from '../../assets/images/logo.png';
import signUpImage from '../../assets/images/signup-image.png'
import { Formik } from "formik";
import { Input, InputGroup, SelectPicker, Checkbox, CheckboxGroup } from "rsuite";
import { ArrowRight, BarChartLineFill } from "react-bootstrap-icons";




const SignUp = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)


    return (
        <Container fluid className="bg-primary">
            <Row className={`center ${signUpStyle.container}`}>
                <Col className={`min-vh-100 p-0 ${signUpStyle.left}`}>

                </Col>
                <Col className={`d-flex w-100 min-vh-100 p-3 pt-4 gap-2 flex-column px-4   align-items-center ${signUpStyle.right}`}>
                    <Row className="mt-4 mb-4">
                        <img src={logo} height={150} />
                    </Row>
                    <Row className="d-flex justify-content-center mt-4 w-100">
                        <Form className="d-flex flex-column text-light justify-content-center align-items-center py-4  border border-1 w-100 border-light" style={{ paddingTop: 30, padding: 50 }}>
                            <h3 style={{ fontWeight: '700' }}>Create Your account</h3>
                            <FormGroup className="d-flex flex-row gap-2 mt-4">
                                <InputGroup className={`d-flex gap-2 align-items-center text-dark px-2 w-50 rounded-1 bg-light ${signUpStyle.textField}`}>
                                    <i className="bi bi-person-fill"></i>
                                    <Input placeholder="First Name" className="w-100 p-2 border-0" />
                                </InputGroup>
                                <InputGroup className={`d-flex gap-2 align-items-center text-dark px-2 w-50 rounded-1 bg-light ${signUpStyle.textField}`}>
                                    <i className="bi bi-person-fill"></i>
                                    <Input placeholder="Last Name" className="w-100 border-0" />
                                </InputGroup>
                            </FormGroup>
                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py ${signUpStyle.textField}`}>
                                <i className="bi bi-envelope-fill"></i>
                                <Input placeholder="Email" className="w-100 p-2 border-0 outline-0" />

                            </InputGroup>
                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py ${signUpStyle.textField}`}>
                                <i className="bi bi-person-fill"></i>
                                <Input placeholder="Username" className="w-100 p-2 border-0 outline-0" />

                            </InputGroup>

                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 py ${signUpStyle.textField}`}>
                                <i className="bi bi-lock-fill"></i>
                                <Input type={showPassword ? 'text' : 'password'} placeholder="Password" className="w-100 p-2 border-0 outline-0" />
                                <i className={showPassword ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"} style={{ cursor: 'pointer' }} onClick={() => setShowPassword(!showPassword)}></i>
                            </InputGroup>
                            <InputGroup className={`w-100 mt-4 d-flex rounded-1 bg-light text-dark align-items-center px-2 mb-4 ${signUpStyle.textField}`}>

                                <FormSelect className="outline-0 border-0 px-0 w-25 ml-4">
                                    <option value="234">+234</option>
                                    <option value="1">+1</option>
                                    <option value="44">+44</option>
                                </FormSelect>
                                <Input placeholder="Phone Number" className="w-100 p-2 border-0 outline-0" />
                            </InputGroup>

                            <CheckboxGroup style={{color:'#E79C3D', marginLeft:35}} className={`w-100  mt-2 d-flex justify-content-center text-light px-2 ${signUpStyle.checkField}`}>
                                <Checkbox style={{marginRight:5}} />
                                I accept the
                                <p className="w-50 p-0" style={{ marginLeft: 5,color: '#E79C3D', cursor: 'pointer' }}>terms and conditions</p>
                                </CheckboxGroup>


                            <Button className="text-dark mt-4 px-4 border-0" type="submit" style={{ backgroundColor: '#E79C3D', fontWeight: '600' }}>Create Account</Button>
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