import React, { useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import './css/studentRegister.css'
import axios from 'axios'

const qs = require('qs');



function StudentRegister() {

    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [idNumber, setIdNumber] = useState('');





    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        console.log(name, email, phone, address, idNumber);
        
        const Student = {
            name: name,
            email: email,
            phoneNumber: phone,
            address: address,
            itNumber: idNumber
        }

        axios.post('http://localhost:5000/api/student/add',Student)
        .then(res => {
            console.log(res.success);
            console.log(res.data);
            if(res.data.success === true){

                alert("Student Added Successfully");
                window.location.href = '/students';
            }
            else{
                alert("Student Not Added" + res.data.message);
            }
        })
        .catch(err => {
            console.log(err);
            alert("Student Not Added. " + err.response.data.message);
        })
        
 
    };
    return (
        <>
            <Header />
            <SideNav />
            <div className="body pt-4">

                <h1 className='text-center pb-5'>Register a New Student</h1>
                <div className="container d-flex justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <Form noValidate validated={validated}  className="px-5 form">
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student Full Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Full name"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student SLIIT Email</Form.Label>
                                        <Form.Control
                                            required
                                            type="email"
                                            placeholder="ITxxxxxxxx@my.sliit.lk"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Should be a valid email!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student ID Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="ITxxxxxxxx"
                                            onChange={(e) => setIdNumber(e.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student Phone number</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="xxxxxxxxxx"
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            Please insert only numbers!
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student Address</Form.Label>
                                        <Form.Control
                                            required
                                            type="Address"
                                            placeholder="No xx,street,city,country"
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                        
                                    </Form.Group>


                                </Row>
                               <div className="d-flex justify-content-end">
                               <Button type="button" onClick={handleSubmit}>Submit form</Button>
                               </div>
                                
                            </Form>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default StudentRegister