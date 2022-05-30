import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Form, Row, Col, Button, Dropdown } from 'react-bootstrap'
import axios from 'axios'



function GroupRegister() {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [batch, setBatch] = useState('');
    const [student1, setStudent1] = useState('');
    const [student2, setStudent2] = useState('');
    const [student3, setStudent3] = useState('');
    const [student4, setStudent4] = useState('');



    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        const StudentGroup = {
            name: name,
            year: year,
            semester: semester,
            batch: batch,
            student1: student1,
            student2: student2,
            student3: student3,
            student4: student4
        }

        console.log(StudentGroup);
        console.log(JSON.stringify(StudentGroup));

        axios.post('http://localhost:5000/api/group/insert', StudentGroup)
            .then(res => {
                console.log(res.success);
                console.log(res.data);
                if(res.data.success === true){
    
                    alert("Student Group Added Successfully");
                    window.location.href = '/groups';
                }
                else{
                    alert("Student Not Added" + res.data.message);
                }
            }).catch(err => {
                alert("Group Not Added.  " + err.response.data.message);
                console.log(err);
            })


    }
    return (
        <>
            <Header />
            <SideNav />
            <div className="body pt-4">
                <h1 className='text-center pb-5'>Register a New Group</h1>
                <div className="container d-flex justify-content-center">
                    <div className="card">
                        <div className="card-body">
                            <Form noValidate validated={validated}  className="px-5 form">
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Group Name</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="Name"
                                            onChange={(e) => setName(e.target.value)}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="3"
                                            onChange={(e) => setYear(e.target.value)}
                                     
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Semester</Form.Label>
                                        <Form.Control
                                            required
                                            type="number"
                                            placeholder="2"
                                            onChange={(e) => setSemester(e.target.value)}
                                           
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="3" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Batch</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="June"
                                            onChange={(e) => setBatch(e.target.value)}
                                           
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student 1 ID Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="ITxxxxxxxx"
                                            onChange={(e) => setStudent1(e.target.value)}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student 2 ID Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="ITxxxxxxxx"
                                            onChange={(e) => setStudent2(e.target.value)}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student 3 ID Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="ITxxxxxxxx"
                                            onChange={(e) => setStudent3(e.target.value)}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            This field is required!
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                                        <Form.Label>Student 4 ID Number</Form.Label>
                                        <Form.Control
                                            required
                                            type="text"
                                            placeholder="ITxxxxxxxx"
                                            onChange={(e) => setStudent4(e.target.value)}
                                        />

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

export default GroupRegister