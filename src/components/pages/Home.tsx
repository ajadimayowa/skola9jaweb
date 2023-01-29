import React from "react";
import homeStyle from "./css/home.module.css";
import logo from '../../assets/images/logo.png';
import { Container, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import LoginForm from "../forms/loginForm"

const Home = () => {


    return (
        <Container fluid className="min-vh-100 p-0 d-flex">
            <Container className={`${homeStyle.left}`}></Container>
            <Container className={`${homeStyle.right} p-2`}>
                <Row className={`${homeStyle.logoSection}`}>
                    <Col>
                        <img src={logo} height={150} />
                    </Col>
                </Row>
                <Row className="w-75">
                    <LoginForm />
                </Row>
                <Row className="text-light"><p className="size-small" style={{ fontSize: 12 }}>Forgot Password?</p></Row>
                <Row className="text-light mt-1 w-75">
                    <Col className="d-flex m-3 justify-content-center w-100">
                        <p className="p-1" style={{ fontSize: 12 }}>Not registered?</p>
                        <Link to={'/signup'} style={{ textDecoration: 'none', cursor: 'pointer' }}><p className="p-1" style={{ color: '#E79C3D', fontSize: 12 }}>Register</p></Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default Home;