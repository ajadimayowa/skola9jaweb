import React from "react";
import { Container, Col, Row, Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import Classes from "./css/dashboard.module.css";
import { Formik, useFormik } from "formik";
import { bool } from "yup";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const Dashboard = () => {

    const formik = useFormik({
        initialValues: { username: '', staus: bool, age: bool },
        onSubmit: (value) => (console.log(value))
    })

    const handleCheck = (value: any) => {
        console.log(value)
    }
    return (
        <>
            <Container fluid className="min-vh-100 justify-content-center align-items-center gap-2">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Form className="rounded-1 border w-75 ">
                            <FormGroup>
                                <input type='text' name="username"  onChange={formik.handleChange} />
                                <input type='checkbox' name="status" onChange={formik.handleChange} />
                                <input type='checkbox' name="age" id="age" onChange={formik.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Button onClick={(e) => {
                                    e.preventDefault()
                                    formik.handleSubmit();
                                }} type='submit'>Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col className="d-flex bg-secondary justify-content-center">right</Col>
                </Row>
                <Row className="d-flex justify-content-center align-items-center mt-3">
                    <Col className="d-flex justify-content-center align-items-center mt-3">

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Dashboard;