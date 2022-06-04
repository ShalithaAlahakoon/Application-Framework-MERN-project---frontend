import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import axios from 'axios';
import EmailService  from "../services/email-service";

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

        const studentEmail = students.email;
        const supervisorEmail = supervisor.email;
        const studentName = students.name;
        const studentPhone = students.phone;


        console.log(students);
        console.log(supervisor);

        const values = {
            from_name : studentName,
            to_name: supervisorEmail,
            student_name: studentName,
            student_email: studentEmail,
            student_phone: studentPhone,
            message: "Hello, I would like to request you to be a supervisor for my project. Please accept my request." +
                " I am looking for a supervisor. Please contact me at: " + studentEmail +
                " and I will be happy to talk to you about my project. Thank you." 
                
             
        }

        console.log ('values = ' + values);
        try{
           await EmailService.sendEmail(values);
  
        } catch (error) {
            alert(error);
        }
  


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
