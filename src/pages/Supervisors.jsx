import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import axios from 'axios';
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey('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');

function Supervisors() {

    const [supervisors, setSupervisors] = useState([]);
    const [students, setStudents] = useState([]);
    const [supervisor, setSupervisor] = useState([]);

    const getSupervisors = async () => {
        await axios.get("http://localhost:5000/api/supervisor/")
            .then((res) => {
                console.log(res.data.data);
                setSupervisors(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    }
    const getStudentByID = async (id) => {
        await axios.get("http://localhost:5000/api/student/" + id)
            .then((res) => {
                console.log(res.data.data);
                setStudents(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    }
    const getSupervisorByID = async (id) => {
        await axios.get("http://localhost:5000/api/supervisor/" + id)
            .then((res) => {
                console.log(res.data.data);
                setSupervisor(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    }


    useEffect(() => {
        getSupervisors();
    }, []);

    const sendRequest = async (id) => {

        console.log(id);


        getStudentByID('6291e56902442fd64bc93f74');
        getSupervisorByID(id);

        const studentEmail = students[0].email;
        const supervisorEmail = supervisor[0].email;


        console.log(students);
        console.log(supervisor);
        const msg = {
            to: {supervisorEmail},
            from: {studentEmail}, // Use the email address or domain you verified above
            subject: 'Request for Supervisor',
            text: 'Hello,\n\n' +
                'This is a confirmation that you have been selected as a supervisor for the student ' + students[0].name + '\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://localhost:3000/supervisor/' + id + '/' + students[0]._id + '/' + students[0].name + '/' + students[0].email + '/' + students[0].phone + '/' + students[0].address + '/' + 
                'If you did not request this, please ignore this email and your password will remain unchanged.\n',
            html: '<strong>Hello,</strong><br><br>' +
                'This is a confirmation that you have been selected as a supervisor for the student ' + students[0].name + '<br><br>' +
                'Please click on the following link, or paste this into your browser to complete the process:<br><br>' +
                '<a href="http://localhost:3000/supervisor/' + id + '/' + students[0]._id + '/' + students[0].name + '/' + students[0].email + '/' + students[0].phone + '/' + students[0].address + '/">http://localhost:3000/supervisor/' + id + '/' + students[0]._id + '/' + students[0].name + '/' + students[0].email + '/' + students[0].phone + '/' + students[0].address + '/</a><br><br>' +
                'If you did not request this, please ignore this email and your password will remain unchanged.<br>'


        };

        // sgMail
        //     .send(msg)
        //     .then(() => { }, error => {
        //         console.error(error);

        //         if (error.response) {
        //             console.error(error.response.body)
        //         }
        //     });
        // await axios.post("http://localhost:5000/api/supervisor/request/" + id)
        //     .then((res) => {
        //         alert("Request Sent Successfully");
        //         console.log(res.data);
        //         getSupervisors();
        //     }).catch((err) => {
        //         console.log(err);
        //         alert("Request Not Sent");
        //     });
    }

    return (
        <div>
            <Header />
            <SideNav />
            <div className="body pt-4">
                <div className="d-flex justify-content-between m-5">
                    <h1>Supervisors</h1>
                    {/* <a href='/addDocument'><button className='btn btn-primary'>Add Documents</button></a> */}
                </div>
                <div className="m-5">
                    <h2>Supervisors</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Name</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Research Area</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supervisors.map((supervisor, index) => {
                                    if (supervisor.type === "supervisor") {
                                        return (
                                            <tr key={index}>
                                                {/* <td>{supervisor.id}</td> */}
                                                <td>{supervisor.name}</td>
                                                <td>{supervisor.department}</td>
                                                <td>{supervisor.email}</td>
                                                <td>{supervisor.phoneNumber}</td>
                                                <td>{supervisor.researchArea}</td>
                                                <td><button value={supervisor._id} className='btn btn-success' onClick={(e) => sendRequest(supervisor._id)}>Request</button></td>
                                            </tr>
                                        )
                                    }
                                    else { }

                                })
                            }



                        </tbody>
                    </table>
                    <br />
                    <hr />
                    <h2 className='mt-5'>Co - Supervisors</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Name</th>
                                <th>Department</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Research Area</th>
                                <th>Request</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                supervisors.map((supervisor, index) => {
                                    if (supervisor.type === "co-supervisor") {
                                        return (
                                            <tr key={index}>
                                                {/* <td>{supervisor.id}</td> */}
                                                <td>{supervisor.name}</td>
                                                <td>{supervisor.department}</td>
                                                <td>{supervisor.email}</td>
                                                <td>{supervisor.phoneNumber}</td>
                                                <td>{supervisor.researchArea}</td>
                                                <td><button className='btn btn-success' onClick={() => sendRequest(supervisor._id)}>Request</button></td>
                                            </tr>
                                        )
                                    }
                                    else { }

                                })
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Supervisors
